<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OrderItemsModel;

class OrderItemsController extends Controller
{
   public function orderItems(){
   	return response()->json(OrderItemsModel::get(), 200);
   }
}
