import { Card } from '@chakra-ui/react';
import { FC, useMemo, useRef } from 'react';
import { TbTable } from 'react-icons/tb';
import {
  ElectroCRUDTabProperties,
  ElectroCRUDTabs,
  ElectroCRUDTabsAPI,
} from 'renderer/components/tabs';

import { DataTableCard } from './data-table';

export const DatasetCoordinator = () => {
  const tabsReference = useRef<ElectroCRUDTabsAPI>();

  const tabs: ElectroCRUDTabProperties[] = useMemo(
    () => [
      {
        name: 'Data Table',
        element: <DataTableCard tabsReference={tabsReference} />,
        icon: TbTable,
      },
    ],
    []
  );

  return (
    <Card
      variant="solid"
      flex={1}
      display="flex"
      flexDirection="column"
      height="100%"
      overflow="scroll"
      overscrollBehavior="contain"
    >
      <ElectroCRUDTabs
        tabsList={tabs}
        tabIndex={0}
        iconSize="15px"
        colorScheme="brand"
        fontSize="sm"
        ref={tabsReference}
      />
    </Card>
  );
};
