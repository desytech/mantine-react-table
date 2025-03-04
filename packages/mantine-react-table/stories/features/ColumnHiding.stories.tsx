import { MantineReactTable, type MRT_ColumnDef } from '../../src';

import { faker } from '@faker-js/faker';
import { type Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Features/Column Hiding Examples',
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
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'state',
    header: 'State',
  },
  {
    accessorKey: 'zip',
    header: 'Zip',
  },
  {
    accessorKey: 'email',
    header: 'Email Address',
  },
  {
    accessorKey: 'phoneNumber',
    header: 'Phone Number',
  },
];

const data = [...Array(100)].map(() => ({
  address: faker.location.streetAddress(),
  email: faker.internet.email(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phoneNumber: faker.phone.number(),
  state: faker.location.state(),
  zip: faker.location.zipCode(),
}));

export const ColumnHidingEnabledDefault = () => (
  <MantineReactTable columns={columns} data={data} />
);

export const ColumnHidingDisabled = () => (
  <MantineReactTable columns={columns} data={data} enableHiding={false} />
);

export const ColumnHidingDisabledButWithOrdering = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    enableColumnOrdering
    enableHiding={false}
  />
);

export const ColumnHidingDisabledButWithPinning = () => (
  <MantineReactTable
    columns={columns}
    data={data}
    enableColumnPinning
    enableHiding={false}
  />
);

export const ColumnHidingDisabledPerColumn = () => (
  <MantineReactTable
    columns={[
      {
        accessorKey: 'firstName',
        enableHiding: false,
        header: 'First Name',
      },
      {
        accessorKey: 'lastName',
        enableHiding: false,
        header: 'Last Name',
      },
      {
        accessorKey: 'address',
        header: 'Address',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
      {
        accessorKey: 'zip',
        header: 'Zip',
      },
      {
        accessorKey: 'email',
        header: 'Email Address',
      },
      {
        accessorKey: 'phoneNumber',
        header: 'Phone Number',
      },
    ]}
    data={data}
  />
);

export const ColumnHidingWithHeaderGroups = () => (
  <MantineReactTable
    columns={[
      {
        columns: [
          {
            accessorKey: 'firstName',
            header: 'First Name',
          },
          {
            accessorKey: 'lastName',
            header: 'Last Name',
          },
        ],
        header: 'Name',
        id: 'name',
      },
      {
        columns: [
          {
            accessorKey: 'address',
            header: 'Address',
          },
          {
            accessorKey: 'state',
            header: 'State',
          },
          {
            accessorKey: 'zip',
            header: 'Zip',
          },
        ],
        header: 'Mailing Info',
        id: 'mailingInfo',
      },
      {
        columns: [
          {
            accessorKey: 'email',
            header: 'Email Address',
          },
          {
            accessorKey: 'phoneNumber',
            header: 'Phone Number',
          },
        ],
        header: 'Contact Info',
        id: 'contactInfo',
      },
    ]}
    data={data}
  />
);
