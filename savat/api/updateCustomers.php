<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

 
  // Sanitize.
$customer_id = mysqli_real_escape_string($con, (int)$request->customer_id);
  $first_name = mysqli_real_escape_string($con, (string)$request->first_name);
  $last_name = mysqli_real_escape_string($con, (string)$request->last_name);
  $birth_date = mysqli_real_escape_string($con, trim($request->birth_date));
  $phone = mysqli_real_escape_string($con, trim($request->phone));
  $postal_code = mysqli_real_escape_string($con, (int)$request->postal_code);
  $city_name = mysqli_real_escape_string($con, (string)$request->city_name);
  $email = mysqli_real_escape_string($con, trim($request->email));
  $password = mysqli_real_escape_string($con, trim($request->password));   

  // Update.
  $sql = "UPDATE 'customers' SET 'customer_id'='$customer_id','first_name'='$first_name','last_name'='$last_name','birth_date'='$birth_date','phone'='$phone','postal_code'='$postal_code' 'city_name'='$city_name','email'='$email','password'='$password'";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}