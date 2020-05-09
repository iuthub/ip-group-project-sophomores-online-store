<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    protected $fillable = ['order_id', 'customer_id', 'order_date', 'comments', 'delivered_date'];
}
