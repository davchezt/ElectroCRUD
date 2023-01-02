import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuItemProps,
  MenuList,
  Portal,
} from '@chakra-ui/react';
import * as R from 'ramda';
import { FC } from 'react';
import { IconType } from 'react-icons';
import { MdOutlineMoreVert } from 'react-icons/md';
import { O } from 'ts-toolbelt';

export type DataTableActionMenuItem = O.Merge<
  { menuIcon: IconType; label: string; onClick: (row: any) => any },
  MenuItemProps
>;
export type DataTableActionMenuProperties = {
  items: DataTableActionMenuItem[];
  row?: any;
};

export const DataTableActionMenu: FC<DataTableActionMenuProperties> = ({
  items,
  row,
}) => (
  <Menu offset={[-15, -5]} isLazy strategy="absolute">
    <MenuButton as={Button} variant="link" _hover={{ color: 'black' }}>
      <Icon as={MdOutlineMoreVert} boxSize={6} />
    </MenuButton>
    <Portal>
      <MenuList rounded="lg" boxShadow="lg" py={0} overflow="hidden">
        {items.map((item) => (
          <MenuItem
            key={item.label}
            {...R.omit<DataTableActionMenuItem, 'menuIcon' | 'label'>(
              ['menuIcon', 'label'],
              item
            )}
            onClick={() => {
              if (item.onClick) {
                item.onClick(row);
              }
            }}
            py={3}
            alignItems="center"
            fontSize="sm"
            textTransform="uppercase"
            gap={3}
            iconSpacing={0}
            _hover={{ fontWeight: 'bold', bgColor: 'blackAlpha.200' }}
            icon={<Icon display="flex" as={item.menuIcon} boxSize={4} />}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Portal>
  </Menu>
);
