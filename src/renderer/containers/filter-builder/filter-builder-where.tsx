import {
  Grid,
  GridItem,
  HStack,
  Icon,
  IconButton,
  Input,
} from '@chakra-ui/react';
import _ from 'lodash';
import { FC, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { AutocompleteField } from 'renderer/components/fields';
import TagsField from 'renderer/components/fields/tags-field';
import { ViewScopedContext } from 'renderer/contexts/view-scoped-context';
import {
  FilterRuleRO,
} from 'renderer/defenitions/record-object/filters.define';
import { useAppDispatch } from 'renderer/store/hooks';
import { FilterRulesReducer } from 'renderer/store/reducers';
import { QueryWhereOprEnum } from 'shared';
import { useDebounce } from 'usehooks-ts';

import {
  ReactSelectColumnOption,
} from './components/react-select-column-option';

type CondValue = string | number | undefined;

enum ValuesInputType {
  VALUE,
  TAGS,
}

export type FilterBuilderWheresGroupCondProperties = {
  id: string;
  column?: string;
  opr?: QueryWhereOprEnum;
  value?: CondValue | CondValue[];
};

export type FilterBuilderWhereProperties = {
  initialState: FilterRuleRO;
};

export const FilterBuilderWhere: FC<
  PropsWithChildren<FilterBuilderWhereProperties>
> = ({ initialState, children }) => {
  const { viewState } = useContext(ViewScopedContext);
  const distpatch = useAppDispatch();

  const [state, setState] = useState(initialState);
  const debouncedState = useDebounce<FilterRuleRO>(state, 1000)

  const [valueType, setValueType] = useState(ValuesInputType.VALUE);

  useEffect(() => {
    distpatch(FilterRulesReducer.actions.upsertOne(debouncedState));
  }, [debouncedState]);

 
  useEffect(() => {
    if (
      state.opr &&
      [QueryWhereOprEnum.IN, QueryWhereOprEnum.NOT_IN].includes(state.opr)
    ) {
      setState((previous) => ({ ...previous, value: [] }));
      setValueType(ValuesInputType.TAGS);
    } else {
      setState((previous) => ({ ...previous, value: '' }));
      setValueType(ValuesInputType.VALUE);
    }
  }, [state.opr]);

  const loadColumns = async (inputValue = '') =>
    viewState?.columns
      .filter((item) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
      )
      .map((item) => ({
        label: item.name,
        value: item.id,
        type: item.data_type,
      }));

  const columnsList = viewState?.columns.map((item) => ({
    label: item.name,
    value: item.id,
    type: item.data_type,
  }));

  const oprsList = [
    [QueryWhereOprEnum.EQ, 'Equals'],
    [QueryWhereOprEnum.GT, 'Greater then'],
    [QueryWhereOprEnum.GTE, 'Greater or Equals'],
    [QueryWhereOprEnum.IN, 'In'],
    [QueryWhereOprEnum.LIKE, 'Like'],
    [QueryWhereOprEnum.LT, 'Less than'],
    [QueryWhereOprEnum.LTE, 'Less or Equals'],
    [QueryWhereOprEnum.NOT_EQ, 'Not Equals'],
    [QueryWhereOprEnum.NOT_IN, 'Not in'],
  ].map((item) => ({ label: item[1], value: item[0] }));

  const loadOprs = async (inputValue = '') =>
    oprsList.filter((item) =>
      item.label.toLowerCase().includes(inputValue.toLowerCase())
    );

  return (
    <Grid
      templateColumns="repeat(9, 1fr)"
      gap={8}
      width="100%"
      alignItems="center"
    >
      <GridItem colSpan={3}>
        <AutocompleteField<string | undefined>
          id={_.uniqueId('column')}
          isMulti={false}
          loadOptions={loadColumns}
          defaultOptions={columnsList}
          size="sm"
          defaultValue={columnsList?.find(
            (item) => item.value === state.column
          )}
          onChange={(value) =>
            setState((previous) => ({ ...previous, column: value }))
          }
          noFormContext
          components={ReactSelectColumnOption}
        />
      </GridItem>
      <GridItem colSpan={2}>
        <AutocompleteField<QueryWhereOprEnum>
          id={_.uniqueId('opr')}
          isMulti={false}
          loadOptions={loadOprs}
          defaultOptions={oprsList}
          size="sm"
          defaultValue={oprsList?.find((item) => item.value === state.opr)}
          onChange={(value) =>
            setState((previous) => ({ ...previous, opr: value }))
          }
          noFormContext
        />
      </GridItem>
      <GridItem colSpan={3}>
        {valueType === ValuesInputType.TAGS ? (
          <TagsField
            onChange={(value) =>
              setState((previous) => ({ ...previous, value }))
            }
            tags={state.value as []}
          />
        ) : (
          <Input
            size="sm"
            type="text"
            variant="flushed"
            h="36px"
            value={state.value}
            onChange={(e) =>
              setState((previous) => ({ ...previous, value: e.target.value }))
            }
          />
        )}
      </GridItem>
      <GridItem colSpan={1}>{children}</GridItem>
    </Grid>
  );
};
