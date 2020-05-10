<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    // Extract the data.
    $request = json_decode($postdata);


    // Sanitize.
    $order_id = mysqli_real_escape_string($con, (int)$request->order_id);
    $phone = mysqli_real_escape_string($con, (int)$request->phone);
    $product_id = mysqli_real_escape_string($con, (int)$request->product_id);
    $price = mysqli_real_escape_string($con, trim($request->price));

    // Create.
    $sql = "insert into orders(customer_id, email, product, price)
                select customers.customer_id, customers.phone, products.name, products.price
            from products,
                 customers
            where product_id = '${product_id}'
            and phone = '${phone}'";

    if (mysqli_query($con, $sql)) {
        http_response_code(201);
        $orderItems = [
            'order_id' => $order_id,
            'product_id' => $product_id,
            'price' => $price,
            'phone' => $phone,
        ];
        echo json_encode($order__items);
    } else {
        http_response_code(422);
    }
}
