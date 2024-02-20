<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create admin user
        $admin = User::create( [
            'email' => 'admin@verveforex.com',
            'name' => 'Admin User',
            'password' => bcrypt('123456'), // Change 'password' to your desired password
        ]);

        // Assign 'admin' role to the admin user
        $admin->assignRole('admin');

        // You can add more user creation logic here if needed
    }
}
