import CommonIcons from 'components/CommonIcons';
import { RouteBase } from './routeUrl';

export const leftmenu = [
  {
    '': [
      {
        label: 'Dashboard',
        icon: CommonIcons.DashboardIcon,
        children: [
          {
            label: 'Dashboard',
            icon: CommonIcons.DashboardIcon,
            path: RouteBase.Home,
          },
          {
            label: 'Dashboard',
            icon: CommonIcons.DashboardIcon,
            path: RouteBase.Home,
          },
        ],
      },
      {
        label: 'Components',
        icon: CommonIcons.Component,
        path: RouteBase.Dashboard,
        chip: 'Newhehe',
      },
    ],
  },
  {
    Widgets: [
      {
        label: 'Statistics',
        icon: CommonIcons.Statistics,
        path: RouteBase.Home,
      },
      {
        label: 'Data',
        icon: CommonIcons.Data,
        path: RouteBase.Home,
      },
      {
        label: 'Chart',
        icon: CommonIcons.Chart,
        path: RouteBase.Home,
      },
    ],
  },
  {
    Application: [
      {
        label: 'Chat',
        icon: CommonIcons.Chat,
        path: RouteBase.Home,
      },
      {
        label: 'Calendar',
        icon: CommonIcons.Calendar,
        path: RouteBase.Home,
      },
      {
        label: 'Customer',
        icon: CommonIcons.Customer,
        children: [
          {
            label: 'List',
          },
        ],
      },
      {
        label: 'Profile',
        icon: CommonIcons.Profile,
        children: [
          {
            label: 'User Profile',
          },
          {
            label: 'Account Profile',
          },
          {
            label: 'User List',
          },
          {
            label: 'User Card',
          },
        ],
      },
      {
        label: 'E-commerce',
        icon: CommonIcons.Ecommerce,
        children: [
          {
            label: 'Products',
          },
          {
            label: 'Product Details',
          },
          {
            label: 'Product List',
          },
          {
            label: 'Add New Product',
          },
          {
            label: 'Checkout',
          },
        ],
      },
    ],
  },
  {
    'Forms Validation': [
      {
        label: 'Forms Validation',
        icon: CommonIcons.FormValidation,
        path: RouteBase.Home,
      },
      {
        label: 'Forms Wizard',
        icon: CommonIcons.FormsWizard,
        path: RouteBase.Home,
      },
      {
        label: 'Layout',
        icon: CommonIcons.Layout,
        children: [
          {
            label: 'Basic',
          },
          {
            label: 'Multi Column',
          },
          {
            label: 'Action Bar',
          },
          {
            label: 'Sticky Bar',
            children: [
              {
                label: 'Sticky Bar jr',
              },
            ],
          },
        ],
      },
      {
        label: 'Plugins',
        icon: CommonIcons.Plugins,
        children: [
          {
            label: 'Mask',
          },
          {
            label: 'Clipboard',
          },
          {
            label: 'reCaptcha',
          },
          {
            label: 'Editor',
          },
          {
            label: 'Dropzone',
          },
        ],
      },
      {
        label: 'React Table',
        icon: CommonIcons.ReactTable,
      },
      {
        label: 'MUI Table',
        icon: CommonIcons.MUITable,
      },
    ],
  },
];
