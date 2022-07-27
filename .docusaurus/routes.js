import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '086'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '8f3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '66a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '2fc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '566'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'f3f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'c21'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '051'),
    exact: true
  },
  {
    path: '/cos',
    component: ComponentCreator('/cos', 'd4c'),
    routes: [
      {
        path: '/cos',
        component: ComponentCreator('/cos', 'f7a'),
        exact: true,
        sidebar: "openapi-sidebar-cos"
      },
      {
        path: '/cos/create-a-bucket',
        component: ComponentCreator('/cos/create-a-bucket', '148'),
        exact: true,
        sidebar: "openapi-sidebar-cos"
      },
      {
        path: '/cos/generating-an-iam-token',
        component: ComponentCreator('/cos/generating-an-iam-token', '9b2'),
        exact: true,
        sidebar: "openapi-sidebar-cos"
      },
      {
        path: '/cos/list-buckets',
        component: ComponentCreator('/cos/list-buckets', '492'),
        exact: true,
        sidebar: "openapi-sidebar-cos"
      },
      {
        path: '/cos/retrieve-a-buckets-headers',
        component: ComponentCreator('/cos/retrieve-a-buckets-headers', '449'),
        exact: true,
        sidebar: "openapi-sidebar-cos"
      }
    ]
  },
  {
    path: '/multi-spec',
    component: ComponentCreator('/multi-spec', '965'),
    routes: [
      {
        path: '/multi-spec',
        component: ComponentCreator('/multi-spec', 'a1e'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/add-a-new-pet-to-the-store',
        component: ComponentCreator('/multi-spec/add-a-new-pet-to-the-store', '164'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/create-a-bucket',
        component: ComponentCreator('/multi-spec/create-a-bucket', '33c'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/create-user',
        component: ComponentCreator('/multi-spec/create-user', 'df6'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/creates-list-of-users-with-given-input-array',
        component: ComponentCreator('/multi-spec/creates-list-of-users-with-given-input-array', '30f'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/creates-list-of-users-with-given-input-array-1',
        component: ComponentCreator('/multi-spec/creates-list-of-users-with-given-input-array-1', 'ecd'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/delete-purchase-order-by-id',
        component: ComponentCreator('/multi-spec/delete-purchase-order-by-id', '2cc'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/delete-user',
        component: ComponentCreator('/multi-spec/delete-user', '133'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/deletes-a-pet',
        component: ComponentCreator('/multi-spec/deletes-a-pet', '63f'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/find-pet-by-id',
        component: ComponentCreator('/multi-spec/find-pet-by-id', '61d'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/find-purchase-order-by-id',
        component: ComponentCreator('/multi-spec/find-purchase-order-by-id', '6e8'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/finds-pets-by-status',
        component: ComponentCreator('/multi-spec/finds-pets-by-status', '316'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/finds-pets-by-tags',
        component: ComponentCreator('/multi-spec/finds-pets-by-tags', '2a2'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/generating-an-iam-token',
        component: ComponentCreator('/multi-spec/generating-an-iam-token', 'ead'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/get-user-by-user-name',
        component: ComponentCreator('/multi-spec/get-user-by-user-name', '8ce'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/introduction',
        component: ComponentCreator('/multi-spec/introduction', '502'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/introduction-1',
        component: ComponentCreator('/multi-spec/introduction-1', 'b3a'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/list-all-flavors',
        component: ComponentCreator('/multi-spec/list-all-flavors', '23e'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/list-buckets',
        component: ComponentCreator('/multi-spec/list-buckets', '2e4'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/logs-out-current-logged-in-user-session',
        component: ComponentCreator('/multi-spec/logs-out-current-logged-in-user-session', '703'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/logs-user-into-the-system',
        component: ComponentCreator('/multi-spec/logs-user-into-the-system', '418'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/missing-summary',
        component: ComponentCreator('/multi-spec/missing-summary', 'd59'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/missing-summary-1',
        component: ComponentCreator('/multi-spec/missing-summary-1', '6c7'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/missing-summary-2',
        component: ComponentCreator('/multi-spec/missing-summary-2', 'ca8'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/missing-summary-3',
        component: ComponentCreator('/multi-spec/missing-summary-3', '7b7'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/missing-summary-4',
        component: ComponentCreator('/multi-spec/missing-summary-4', '0dc'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/missing-summary-5',
        component: ComponentCreator('/multi-spec/missing-summary-5', 'f20'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/missing-summary-6',
        component: ComponentCreator('/multi-spec/missing-summary-6', 'aa5'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/missing-summary-7',
        component: ComponentCreator('/multi-spec/missing-summary-7', '487'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/missing-summary-8',
        component: ComponentCreator('/multi-spec/missing-summary-8', '8b1'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/missing-summary-9',
        component: ComponentCreator('/multi-spec/missing-summary-9', '505'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/place-an-order-for-a-pet',
        component: ComponentCreator('/multi-spec/place-an-order-for-a-pet', 'a17'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/retrieve-a-buckets-headers',
        component: ComponentCreator('/multi-spec/retrieve-a-buckets-headers', '715'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/returns-pet-inventories-by-status',
        component: ComponentCreator('/multi-spec/returns-pet-inventories-by-status', 'd82'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/subscribe-to-the-store-events',
        component: ComponentCreator('/multi-spec/subscribe-to-the-store-events', '979'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/update-an-existing-pet',
        component: ComponentCreator('/multi-spec/update-an-existing-pet', '8e8'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/updated-user',
        component: ComponentCreator('/multi-spec/updated-user', '25d'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/updates-a-pet-in-the-store-with-form-data',
        component: ComponentCreator('/multi-spec/updates-a-pet-in-the-store-with-form-data', '08f'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      },
      {
        path: '/multi-spec/uploads-an-image',
        component: ComponentCreator('/multi-spec/uploads-an-image', 'ee3'),
        exact: true,
        sidebar: "openapi-sidebar-multi-spec"
      }
    ]
  },
  {
    path: '/petstore',
    component: ComponentCreator('/petstore', 'f7c'),
    routes: [
      {
        path: '/petstore',
        component: ComponentCreator('/petstore', 'b6f'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/petstore/add-a-new-pet-to-the-store',
        component: ComponentCreator('/petstore/add-a-new-pet-to-the-store', '444'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/petstore/create-user',
        component: ComponentCreator('/petstore/create-user', '409'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/petstore/creates-list-of-users-with-given-input-array',
        component: ComponentCreator('/petstore/creates-list-of-users-with-given-input-array', '913'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/petstore/creates-list-of-users-with-given-input-array-1',
        component: ComponentCreator('/petstore/creates-list-of-users-with-given-input-array-1', '070'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/petstore/delete-purchase-order-by-id',
        component: ComponentCreator('/petstore/delete-purchase-order-by-id', '755'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/petstore/delete-user',
        component: ComponentCreator('/petstore/delete-user', '226'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/petstore/deletes-a-pet',
        component: ComponentCreator('/petstore/deletes-a-pet', 'e4b'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/petstore/find-pet-by-id',
        component: ComponentCreator('/petstore/find-pet-by-id', 'b5b'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/petstore/find-purchase-order-by-id',
        component: ComponentCreator('/petstore/find-purchase-order-by-id', 'e88'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/petstore/finds-pets-by-status',
        component: ComponentCreator('/petstore/finds-pets-by-status', '410'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/petstore/finds-pets-by-tags',
        component: ComponentCreator('/petstore/finds-pets-by-tags', '1ef'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/petstore/get-user-by-user-name',
        component: ComponentCreator('/petstore/get-user-by-user-name', 'c9f'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/petstore/introduction',
        component: ComponentCreator('/petstore/introduction', '57f'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/petstore/logs-out-current-logged-in-user-session',
        component: ComponentCreator('/petstore/logs-out-current-logged-in-user-session', '58d'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/petstore/logs-user-into-the-system',
        component: ComponentCreator('/petstore/logs-user-into-the-system', '782'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/petstore/place-an-order-for-a-pet',
        component: ComponentCreator('/petstore/place-an-order-for-a-pet', '0b5'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/petstore/returns-pet-inventories-by-status',
        component: ComponentCreator('/petstore/returns-pet-inventories-by-status', '16e'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/petstore/subscribe-to-the-store-events',
        component: ComponentCreator('/petstore/subscribe-to-the-store-events', '337'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/petstore/update-an-existing-pet',
        component: ComponentCreator('/petstore/update-an-existing-pet', 'd4b'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/petstore/updated-user',
        component: ComponentCreator('/petstore/updated-user', 'c2a'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/petstore/updates-a-pet-in-the-store-with-form-data',
        component: ComponentCreator('/petstore/updates-a-pet-in-the-store-with-form-data', '206'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/petstore/uploads-an-image',
        component: ComponentCreator('/petstore/uploads-an-image', '8f4'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '0ae'),
    routes: [
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations', '793'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '68e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'c2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'f44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'e46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features', '4b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'fdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '2d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '3d0'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
