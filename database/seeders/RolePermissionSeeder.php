<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         // Reset cached roles and permissions
         app()['cache']->forget('spatie.permission.cache');

         // Define roles and permissions
         $rolesAndPermissions = [
             'admin' => [
                 'permissions' => ['view_video_dashboard', 'manage_website_settings'],
                 'parent' => null,
             ],
             'super admin' => [
                 'permissions' => ['view_video_dashboard', 'manage_website_settings'],
                 'parent' => 'admin',
             ],
         ];

         // Create permissions
         foreach ($rolesAndPermissions as $roleName => $roleData) {
            $role = Role::findByName($roleName);
            if(empty($role)){
                $role = Role::create(['name' => $roleName]);
            }

             foreach ($roleData['permissions'] as $permissionName) {
                if(!Permission::findByName($permissionName)){
                    Permission::create(['name' => $permissionName]);
                }
             }

             // Assign permissions to role
             $role->givePermissionTo($roleData['permissions']);


         }

    }
}
