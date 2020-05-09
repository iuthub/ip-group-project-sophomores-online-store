<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order_Items extends Model
{
    protected $fillable = ['order_id', 'product_id', 'quantity_in_store', 'price'];
}

