<?php

require 'database.php';

$feedback_list = [];
$sql = "SELECT email, comments  FROM feedback_list";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
  
    $feedback_list[$i]['email'] = $row['email'];
    $feedback_list[$i]['comments'] = $row['comments'];
    $i++;
  }

  echo json_encode($feedback_list);
}
else
{
  http_response_code(404);
}
