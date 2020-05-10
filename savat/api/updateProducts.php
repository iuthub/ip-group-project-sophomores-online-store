<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

 
  // Sanitize.
  $product_id = mysqli_real_escape_string($con, (int)$request->product_id);
  $name = mysqli_real_escape_string($con, (string)$request->name);
  $price = mysqli_real_escape_string($con, trim($request->price));
 

  // Update.
  $sql = "UPDATE 'products' SET 'product_id'='$product_id','name'='$name','price'='$price'";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}