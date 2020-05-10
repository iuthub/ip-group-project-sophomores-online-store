<?php

use Illuminate\Database\Seeder;

class OrderItemsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $order_item = new \App\Order_Items([
           'order_id' => '1',
           'product_id' => '4',
           'quantity_in_store' => '4',
           'price' => 3.74
        ]); 
        $order_item->save();

          $order_item = new \App\Order_Items([
           'order_id' => '2',
           'product_id' => '1',
           'quantity_in_store' => '2',
           'price' => 9.10
        ]); 
        $order_item->save();


          $order_item = new \App\Order_Items([
           'order_id' => '2',
           'product_id' => '4',
           'quantity_in_store' => '4',
           'price' => 1.66
        ]); 
        $order_item->save();


          $order_item = new \App\Order_Items([
           'order_id' => '2',
           'product_id' => '6',
           'quantity_in_store' => '2',
           'price' => 2.94
        ]); 
        $order_item->save();


          $order_item = new \App\Order_Items([
           'order_id' => '3',
           'product_id' => '3',
           'quantity_in_store' => '10',
           'price' => 9.12
        ]); 
        $order_item->save();


          $order_item = new \App\Order_Items([
           'order_id' => '4',
           'product_id' => '3',
           'quantity_in_store' => '7',
           'price' => 6.99
        ]); 
        $order_item->save();


          $order_item = new \App\Order_Items([
           'order_id' => '4',
           'product_id' => '10',
           'quantity_in_store' => '7',
           'price' => 6.40
        ]); 
        $order_item->save();

           $order_item = new \App\Order_Items([
           'order_id' => '5',
           'product_id' => '2',
           'quantity_in_store' => '3',
           'price' => 9.89
        ]); 
        $order_item->save();

           $order_item = new \App\Order_Items([
           'order_id' => '6',
           'product_id' => '1',
           'quantity_in_store' => '4',
           'price' => 8.65
        ]); 
        $order_item->save();

           $order_item = new \App\Order_Items([
           'order_id' => '6',
           'product_id' => '2',
           'quantity_in_store' => '4',
           'price' => 3.28
        ]); 
        $order_item->save();

           $order_item = new \App\Order_Items([
           'order_id' => '6',
           'product_id' => '3',
           'quantity_in_store' => '4',
           'price' => 7.46
        ]); 
        $order_item->save();

           $order_item = new \App\Order_Items([
           'order_id' => '6',
           'product_id' => '5',
           'quantity_in_store' => '1',
           'price' => 3.45
        ]); 
        $order_item->save();

           $order_item = new \App\Order_Items([
           'order_id' => '7',
           'product_id' => '3',
           'quantity_in_store' => '7',
           'price' => 9.17
        ]); 
        $order_item->save();

           $order_item = new \App\Order_Items([
           'order_id' => '8',
           'product_id' => '5',
           'quantity_in_store' => '2',
           'price' => 6.94
        ]); 
        $order_item->save();

           $order_item = new \App\Order_Items([
           'order_id' => '8',
           'product_id' => '8',
           'quantity_in_store' => '2',
           'price' => 8.59
        ]); 
        $order_item->save();

           $order_item = new \App\Order_Items([
           'order_id' => '9',
           'product_id' => '6',
           'quantity_in_store' => '5',
           'price' => 7.28
        ]); 
        $order_item->save();

           $order_item = new \App\Order_Items([
           'order_id' => '10',
           'product_id' => '1',
           'quantity_in_store' => '10',
           'price' => 6.01
        ]); 
        $order_item->save();

           $order_item = new \App\Order_Items([
           'order_id' => '10',
           'product_id' => '9',
           'quantity_in_store' => '9',
           'price' => 4.28
        ]); 
        $order_item->save();
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> b914cca8fc120c509313eb653fb1e50694e4b2cc
