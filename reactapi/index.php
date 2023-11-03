<?php 

error_reporting(E_ALL);
// ini_set(display_errors, 1);
header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers:* ");
header("Access-Control-Allow-Methods:* ");

$db_conn = mysqli_connect("localhost", "root","", "reactapi");
if($db_conn === false)
{
	die("ERROR : Could not Connect".mysqli_connect_error());
}

$method = $_SERVER['REQUEST_METHOD'];
// // echo "test ---- ".$method; die(); 

switch ($method) {
	case 'GET':
	$path = explode('/', $_SERVER['REQUEST_URI']);
	if(isset($path[4]) && is_numeric($path[4]))
	{
		$json_array = array();
		$employee_id = $path[4];
		$getuserrow = mysqli_query($db_conn, "SELECT * FROM employee WHERE id='$employee_id' ");
		while ($userrow = mysqli_fetch_array($getuserrow)) 
		{

			$json_array['rowEmployeeData'] = array("id"=> $userrow['id'], "name"=> $userrow['name'], "dob"=> $userrow['dob'], "salary"=> $userrow['salary'], "joining_date"=> $userrow['joining_date'], "relieving_date"=> $userrow['relieving_date'], "contact"=> $userrow['contact'], "status"=> $userrow['status']);
		}
		// echo "<pre>"; print_r($json_array['rowEmployeeData']); die();	
			
		echo json_encode($json_array['rowEmployeeData']);
		return;
	}
	else
	{
		$alluser = mysqli_query($db_conn, "SELECT * FROM employee");
		if(mysqli_num_rows($alluser)> 0 )
		{
			while ($row= mysqli_fetch_array($alluser)) 
			{
				$json_array["employee_data"][] = array("id"=> $row['id'], "name"=> $row['name'], "dob"=> $row['dob'], "salary"=> $row['salary'], "joining_date"=> $row['joining_date'], "relieving_date"=> $row['relieving_date'], "contact"=> $row['contact'], "status"=> $row['status']);	
				
			}
			echo  json_encode($json_array["employee_data"]);
			// echo "<pre>"; print_r($json_data); die();
			return;
		}
		else
		{
			echo json_encode(["result"=> "Please Check the Data"]);
			return;
		}
		break;	
	}

		
	case 'POST' : 
		$userpostdata = json_decode(file_get_contents("php://input"));
		// echo "<pre>"; print_r($userpostdata); die();
		$name = $userpostdata->name;
		$dob = $userpostdata->dob;
		$salary = $userpostdata->salary;
		$joining_date = $userpostdata->joining_date;
		$relieving_date = $userpostdata->relieving_date;
		$contact = $userpostdata->contact;
		$status = $userpostdata->status;
		$result = mysqli_query($db_conn, "INSERT INTO `employee`(`name`, `dob`, `salary`, `joining_date`, `relieving_date`, `contact`, `status`) VALUES ('$name', '$dob', '$salary', '$joining_date', '$relieving_date', '$contact', '$status')");
		if ($result) 
		{
			echo json_encode(["Success"=> "Employee Record Added Successfully"]); 
		}
		else
		{
			echo json_encode(["Failed"=> "Unable to Add Employee Record"]); 
		}
		
		break;
	case 'PUT' :
		$userputdata = json_decode(file_get_contents("php://input"));
		// echo "<pre>"; print_r($userputdata); die();
		$name = $userputdata->name;
		$dob = $userputdata->dob;
		$salary = $userputdata->salary;
		$joining_date = $userputdata->joining_date;
		$relieving_date = $userputdata->relieving_date;
		$contact = $userputdata->contact;
		$status = $userputdata->status;
		$id = $userputdata->id;
		$result = mysqli_query($db_conn, "UPDATE `employee` SET `name`='$name',`dob`='$dob',`salary`='$salary',`joining_date`='$joining_date',`relieving_date`='$relieving_date',`contact`='$contact',`status`='$status' WHERE `id`='$id' ");
		if ($result) 
		{
			echo json_encode(["Success"=> "Employee Record Updated Successfully"]); 
		}
		else
		{
			echo json_encode(["Failed"=> "Unable to Update Employee Record"]); 
		}
		break;

	case "DELETE" :
		$path = explode('/', $_SERVER['REQUEST_URI']);
		$employee_id = $path[4];
		// echo "<pre>"; print_r($employee_id); die();
		$result = mysqli_query($db_conn, "DELETE FROM `employee` WHERE `id`='$employee_id' ");
		if ($result) 
		{
			echo json_encode(["Success"=> "Employee Record Deleted Successfully"]); 
		}
		else
		{
			echo json_encode(["Failed"=> "Unable to Delete Employee Record"]); 
		}
		break;
}


?>