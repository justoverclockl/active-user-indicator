import app from 'flarum/admin/app';
import { extend } from 'flarum/common/extend';
import UserListPage from 'flarum/admin/components/UserListPage';

app.initializers.add('justoverclock/be-active-user-indicator', () => {
  extend(UserListPage.prototype, 'columns', (items) => {
    items.add(
      'active-user-indicator',
      {
        name: app.translator.trans('justoverclock-be-active-user-indicator.admin.activeUI'),
        content: (user) => {
          console.log(user)
          const isActive = user.data.attributes.isEmailConfirmed
          if (isActive) {
            return (
              <div className="UserList-isActive">
                {app.translator.trans('justoverclock-be-active-user-indicator.admin.active')}
              </div>
            )
          } else {
            return (
              <div className="UserList-notActive">
                {app.translator.trans('justoverclock-be-active-user-indicator.admin.notActive')}
              </div>
            )
          }
        }
      }
    )
  })
});
