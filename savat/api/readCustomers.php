<?php

require 'database.php';

$customers = [];
$sql = "SELECT customer_id, first_name, last_name, birth_date, phone, postal_code, city_name, email, password  FROM customers";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $customers[$i]['customer_id'] = $row['customer_id'];
    $customers[$i]['first_name'] = $row['first_name'];
    $customers[$i]['last_name'] = $row['last_name'];
    $customers[$i]['birth_date'] = $row['birth_date'];
    $customers[$i]['phone'] = $row['phone'];
    $customers[$i]['postal_code'] = $row['postal_code'];
    $customers[$i]['city_name'] = $row['city_name'];
    $customers[$i]['email'] = $row['email'];
    $customers[$i]['password'] = $row['password'];
    $i++;
  }

  echo json_encode($customers);
}
else
{
  http_response_code(404);
}