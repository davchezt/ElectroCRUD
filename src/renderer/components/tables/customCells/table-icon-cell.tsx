import { Tag, TagLeftIcon } from '@chakra-ui/react';
import { Tooltip } from 'renderer/components/dataDisplay';
import { FC } from 'react';
import { IconType } from 'react-icons';

type TableIconCellProperties = {
  icon: IconType;
  tooltip: string;
};

export const TableIconCell: FC<TableIconCellProperties> = ({
  icon,
  tooltip,
}) => {
  return (
    <Tooltip label={tooltip}>
      <Tag variant="subtle" colorScheme="primary">
        <TagLeftIcon as={icon} me={0} fontSize="md" />
      </Tag>
    </Tooltip>
  );
};
