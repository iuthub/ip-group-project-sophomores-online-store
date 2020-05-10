<?php

require 'database.php';

$products = [];
$sql = "SELECT product_id, name, price  FROM products";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
   
    $products[$i]['product_id'] = $row['product_id'];
    $products[$i]['name'] = $row['name'];
    $products[$i]['price'] = $row['price'];
    $i++;
  }

  echo json_encode($products);
}
else
{
  http_response_code(404);
}