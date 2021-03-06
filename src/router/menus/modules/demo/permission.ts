import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 15,
  menu: {
    name: t('routes.demo.permission.permission'),
    path: '/permission',
    children: [
      {
        path: 'account',
        name: t('routes.demo.system.account'),
      },
      {
        path: 'role',
        name: t('routes.demo.system.role'),
      },
      {
        path: 'menu',
        name: t('routes.demo.system.menu'),
      },
      {
        path: 'dept',
        name: t('routes.demo.system.dept'),
      },

      {
        path: 'changePassword',
        name: t('routes.demo.system.password'),
      },

    ],
  },
};
export default menu;
