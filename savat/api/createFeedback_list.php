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
  $email = mysqli_real_escape_string($con, trim($request->email));
  $comments = mysqli_real_escape_string($con, trim($request->comments));


  // Create.
  $sql = "INSERT INTO 'feedback_list'('email', 'comments') VALUES ('{$email}', '{$customer_id}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $feedback_list = [
      'customer_id' => $customer_id,
      'email' => $email,
      'comments' => mysqli_insert_created_at($con)
    ];
    echo json_encode($feedback_list);
  }
  else
  {
    http_response_code(422);
  }
}
