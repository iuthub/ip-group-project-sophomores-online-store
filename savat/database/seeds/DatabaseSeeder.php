<<<<<<< HEAD
<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
       $this->call(OrdersTableSeeder::class);
       $this->call(OrderItemsTableSeeder::class);
    }
}
=======
<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
       $this->call(OrdersTableSeeder::class);
       $this->call(OrderItemsTableSeeder::class);
    }
}
>>>>>>> b914cca8fc120c509313eb653fb1e50694e4b2cc
