import { ActionIcon, Box, Button, Title, Tooltip } from '@mantine/core';

import {
  MantineReactTable,
  type MRT_ColumnDef,
  MRT_ToggleFullScreenButton,
} from '../../src';

import { faker } from '@faker-js/faker';
import { type Meta } from '@storybook/react';
import { IconPlus, IconTrash } from '@tabler/icons-react';

const meta: Meta = {
  title: 'Features/Toolbar Examples',
};

export default meta;

const columns: MRT_ColumnDef<(typeof data)[0]>[] = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
  },
  {
    accessorKey: 'age',
    header: 'Age',
  },
  {
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'phoneNumber',
    header: 'Phone Number',
  },
];

const data = [...Array(5)].map(() => ({
  address: faker.location.streetAddress(),
  age: faker.number.int(80),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phoneNumber: faker.phone.number(),
}));

export const ToolbarEnabledDefault = () => (
  <MantineReactTable columns={columns} data={data} enableRowSelection />
);

export const TopToolbarHidden = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    enableRowSelection
    enableTopToolbar={false}
  />
);

export const BottomToolbarHidden = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    enableBottomToolbar={false}
    enableRowSelection
  />
);

export const NoToolbars = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    enableBottomToolbar={false}
    enableRowSelection
    enableTopToolbar={false}
  />
);

export const HideToolbarInternalActions = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    enableRowSelection
    enableToolbarInternalActions={false}
  />
);

export const CustomToolbarInternalActions = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    enableGrouping
    enableRowSelection
    renderToolbarInternalActions={({ table }) => {
      return (
        <>
          <MRT_ToggleFullScreenButton table={table} />
        </>
      );
    }}
  />
);

export const TableTitle = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    enableRowSelection
    renderTopToolbarCustomActions={() => {
      return <Title order={3}>Table Title</Title>;
    }}
  />
);

export const CustomTopToolbarActions = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    enableRowSelection
    renderTopToolbarCustomActions={() => {
      const handleCreateNewUser = () => {
        prompt('Create new user modal');
      };

      return (
        <div>
          <Tooltip label="Create New User">
            <ActionIcon onClick={handleCreateNewUser} variant={'default'}>
              <IconPlus />
            </ActionIcon>
          </Tooltip>
        </div>
      );
    }}
  />
);

export const CustomBottomToolbarActions = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    enableRowSelection
    renderBottomToolbarCustomActions={() => {
      const handleCreateNewUser = () => {
        prompt('Create new user modal');
      };

      return (
        <div>
          <Tooltip label="Create New User">
            <ActionIcon onClick={handleCreateNewUser}>
              <IconPlus />
            </ActionIcon>
          </Tooltip>
        </div>
      );
    }}
  />
);

export const CustomTopToolbarSelectionActions = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    enableRowSelection
    renderTopToolbarCustomActions={({ table }) => {
      const handleDeactivate = () => {
        table.getSelectedRowModel().flatRows.map((row) => {
          alert('deactivating ' + row.original.firstName);
        });
      };

      const handleActivate = () => {
        table.getSelectedRowModel().flatRows.map((row) => {
          alert('activating ' + row.original.firstName);
        });
      };

      const handleContact = () => {
        table.getSelectedRowModel().flatRows.map((row) => {
          alert('contact ' + row.original.firstName);
        });
      };

      return (
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button
            color="error"
            disabled={table.getSelectedRowModel().flatRows.length === 0}
            onClick={handleDeactivate}
            variant="filled"
          >
            Deactivate
          </Button>
          <Button
            color="success"
            disabled={table.getSelectedRowModel().flatRows.length === 0}
            onClick={handleActivate}
            variant="filled"
          >
            Activate
          </Button>
          <Button
            color="info"
            disabled={table.getSelectedRowModel().flatRows.length === 0}
            onClick={handleContact}
            variant="filled"
          >
            Contact
          </Button>
        </div>
      );
    }}
  />
);

export const CustomBottomToolbarSelectionActions = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    enableRowSelection
    renderBottomToolbarCustomActions={({ table }) => {
      const handleDeactivate = () => {
        table.getSelectedRowModel().flatRows.map((row) => {
          alert('deactivating ' + row.original.firstName);
        });
      };

      const handleActivate = () => {
        table.getSelectedRowModel().flatRows.map((row) => {
          alert('activating ' + row.original.firstName);
        });
      };

      const handleContact = () => {
        table.getSelectedRowModel().flatRows.map((row) => {
          alert('contact ' + row.original.firstName);
        });
      };

      return (
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button
            color="error"
            disabled={table.getSelectedRowModel().flatRows.length === 0}
            onClick={handleDeactivate}
            variant="filled"
          >
            Deactivate
          </Button>
          <Button
            color="success"
            disabled={table.getSelectedRowModel().flatRows.length === 0}
            onClick={handleActivate}
            variant="filled"
          >
            Activate
          </Button>
          <Button
            color="info"
            disabled={table.getSelectedRowModel().flatRows.length === 0}
            onClick={handleContact}
            variant="filled"
          >
            Contact
          </Button>
        </div>
      );
    }}
  />
);

export const ToolbarAlertBannerBottom = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    enableRowSelection
    positionToolbarAlertBanner="bottom"
    renderTopToolbarCustomActions={({ table }) => {
      const handleCreateNewUser = () => {
        prompt('Create new user modal');
      };
      const handleRemoveUsers = () => {
        confirm('Are you sure you want to remove the selected users?');
      };

      return (
        <div>
          <Tooltip label="Create New User">
            <ActionIcon onClick={handleCreateNewUser}>
              <IconPlus />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Remove Users">
            <span>
              <ActionIcon
                disabled={table.getSelectedRowModel().flatRows.length === 0}
                onClick={handleRemoveUsers}
              >
                <IconTrash />
              </ActionIcon>
            </span>
          </Tooltip>
        </div>
      );
    }}
  />
);

export const ToolbarAlertBannerBottomWithActionsAlsoBottom = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    enableRowSelection
    positionToolbarAlertBanner="bottom"
    renderBottomToolbarCustomActions={({ table }) => {
      const handleCreateNewUser = () => {
        prompt('Create new user modal');
      };
      const handleRemoveUsers = () => {
        confirm('Are you sure you want to remove the selected users?');
      };

      return (
        <div>
          <Tooltip label="Create New User">
            <ActionIcon onClick={handleCreateNewUser}>
              <IconPlus />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Remove Users">
            <span>
              <ActionIcon
                disabled={table.getSelectedRowModel().flatRows.length === 0}
                onClick={handleRemoveUsers}
              >
                <IconTrash />
              </ActionIcon>
            </span>
          </Tooltip>
        </div>
      );
    }}
  />
);

export const renderCustomTopToolbar = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    renderTopToolbar={() => (
      <Box style={{ padding: '2rem' }}>Custom Top Toolbar</Box>
    )}
  />
);

export const renderCustomBottomToolbar = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    renderBottomToolbar={() => (
      <Box style={{ padding: '2rem' }}>Custom Bottom Toolbar</Box>
    )}
  />
);
