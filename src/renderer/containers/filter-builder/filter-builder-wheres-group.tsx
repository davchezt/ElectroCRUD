import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  HStack,
  Icon,
  VStack,
} from '@chakra-ui/react';
import { FC, useMemo } from 'react';
import { VscGroupByRefType, VscUngroupByRefType } from 'react-icons/vsc';
import { RippleButton } from 'renderer/components/buttons/ripple-button';
import { useAppDispatch, useAppSelector } from 'renderer/store/hooks';
import { FiltersReducer } from 'renderer/store/reducers';

import { FilterBuilderWheres } from './filter-builder-wheres';

type FilterBuilderGroupProperties = {
  index?: number;
  filterId: string;
};

export const FilterBuilderWheresGroup: FC<FilterBuilderGroupProperties> = ({
  index = 0,
  filterId,
}) => {
  const distpatch = useAppDispatch();
  const allFiltersState = useAppSelector((state) => state.filters);
  const filterState = useMemo(
    () => FiltersReducer.getSelectors().selectById(allFiltersState, filterId),
    [allFiltersState, filterId]
  );
  const childFilersState = useMemo(
    () =>
      FiltersReducer.getSelectors()
        .selectAll(allFiltersState)
        .filter((item) => item.parentId === filterId),
    [allFiltersState, filterId]
  );

  return (
    <>
      {filterState?.id && (
        <VStack key={`filter-${filterState.id}`} w="100%">
          <Card
            variant="solid"
            boxShadow="sm"
            borderWidth={1}
            mt={index === 0 ? 0 : 3}
            bg={index % 2 === 0 ? 'white' : 'gray.100'}
            overflow="initial"
          >
            <CardBody overflow="initial">
              <Box display="flex" flexDirection="row">
                <Box width="100%" flexDirection="row" display="flex">
                  <Center
                    height="auto"
                    flexDirection="column"
                    display="flex"
                    px={6}
                    pl={3}
                  >
                    <Divider
                      orientation="vertical"
                      width="15px"
                      borderWidth="2px"
                      borderRightWidth={0}
                      borderTopLeftRadius="5px"
                      borderBottomLeftRadius="5px"
                      borderColor="brand.300"
                    />
                    <Button
                      colorScheme="brand"
                      bg="brand.200"
                      variant="solid"
                      size="xs"
                      position="absolute"
                      fontSize="xx-small"
                      left="15px"
                      width="27px"
                      height="27px"
                      borderRadius="30px"
                      fontWeight="normal"
                      _hover={{
                        transform: 'scale(1.3)',
                      }}
                      onClick={() =>
                        distpatch(
                          FiltersReducer.actions.upsertOne({
                            id: filterState.id,
                            and: !filterState.and,
                          })
                        )
                      }
                    >
                      {filterState.and ? 'AND' : 'OR'}
                    </Button>
                  </Center>
                  <Box display="flex" flexDirection="column" width="100%">
                    <FilterBuilderWheres filterId={filterState?.id} />
                    {childFilersState.map((item) => (
                      <FilterBuilderWheresGroup
                        key={item.id}
                        filterId={item.id as string}
                        index={index + 1}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            </CardBody>
            <CardFooter justifyContent="flex-end" pt={0}>
              <HStack>
                <RippleButton
                  fontWeight="thin"
                  colorScheme="brand"
                  size="sm"
                  leftIcon={<Icon as={VscGroupByRefType} fontSize="lg" />}
                  onClick={() => {
                    distpatch(
                      FiltersReducer.actions.upsertOne(
                        {
                          and: true,
                          parentId: filterState.id,
                        },
                        { new: true }
                      )
                    );
                  }}
                >
                  ADD SUB GROUP
                </RippleButton>
                <RippleButton
                  fontWeight="thin"
                  colorScheme="red"
                  size="sm"
                  bgColor={{
                    step1: 'red.400',
                    step2: 'red.600',
                    step3: 'red.100',
                  }}
                  onClick={() => {
                    if (filterState?.id) {
                      distpatch(
                        FiltersReducer.actions.removeOne(filterState.id)
                      );
                    }
                  }}
                  leftIcon={<Icon as={VscUngroupByRefType} fontSize="lg" />}
                >
                  REMOVE SUB GROUP
                </RippleButton>
              </HStack>
            </CardFooter>
          </Card>
        </VStack>
      )}
    </>
  );
};
