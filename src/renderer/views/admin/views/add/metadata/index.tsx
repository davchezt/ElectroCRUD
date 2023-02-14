import { Box, Card, CardBody } from '@chakra-ui/react';
import { MdBook, MdCode, MdTag } from 'react-icons/md';
import { TabProperties, Tabs } from '@electrocrud/tabs';

import { CodeExamples } from './code-examples';
import { MetaColumnsWithContext } from './columns';
import { TablesMetadata } from './tables-metadata';

const tabs: TabProperties[] = [
  {
    name: 'Table Documentation',
    element: <TablesMetadata />,
    icon: MdBook,
  },
  {
    name: 'Code & Queries',
    element: <CodeExamples />,
    icon: MdCode,
  },
  {
    name: 'Columns',
    element: <MetaColumnsWithContext />,
    icon: MdTag,
  },
];

export const MetadataTabs = () => {
  return (
    <Box height="-webkit-fill-available">
      <Card height="100%" variant="elevated">
        <CardBody px={0} py={0}>
          <Tabs
            tabsList={tabs}
            tabIndex={0}
            iconSize="15px"
            colorScheme="primary"
            fontSize="sm"
            fillAvailable
            hasScrollbar
            marginTop={5}
          />
        </CardBody>
      </Card>
    </Box>
  );
};

export * from './tables-metadata';
