<?php

use Illuminate\Database\Seeder;

class OrdersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       $order = new \App\Orders([
           'order_id' => '1',
           'customer_id' => '6',
           'order_date' => '2019-01-30',
           'comments' => 'good',
           'delivered_date' => '2019-02-01'
        ]); 
        $order->save();

         $order = new \App\Orders([
           'order_id' => '2',
           'customer_id' => '7',
           'order_date' => '2019-08-02',
           'comments' => 'perfect',
           'delivered_date' => '2019-08-04'
        ]); 
        $order->save();

          $order = new \App\Orders([
           'order_id' => '3',
           'customer_id' => '8',
           'order_date' => '2019-12-01',
           'comments' => 'good quality products',
           'delivered_date' => '2019-12-05'
        ]); 
        $order->save();
    }
}
