
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/security/tags"
	prefix="sec"%>
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/resources/css/header.css">
<script src="https://kit.fontawesome.com/a4b9f55ded.js"
	crossorigin="anonymous"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<title>Board</title>
</head>

<body>
<<<<<<< HEAD
    <nav class="navbar">
        <div class="navbar_logo">
            <i class="fas fa-universal-access"></i>
            <h1>DIVE</h1>
        </div>
        <ul class="navbar_menu">
            <li><a href="/product/list">PRODUCT</a></li>
            <li><a href="/board/list">BOARD</a></li>
            <li><a
                    onclick="window.open ( '/chat/chatting', 'name', 'width = 400, height = 569, scrollbars=no, resizable=no, toolbars=no, menubar=no')">CHAT</a>
            </li>
            <li><a href="#">CORPORATION</a></li>
        </ul>
        <ul class="navbar_icons">
            <sec:authorize access="isAnonymous()">
                 <a href="/user/userLogin">
                <li>Log in</li>
            </a>
            <a href="/user/singUp">
                <li>Sign up</li>
            </a>
            </sec:authorize>
            
            <sec:authorize access="isAuthenticated()">
            	<a class="nav-link" href="/user/userLogout">Logout</a>
            </sec:authorize>
        </ul>
        <a href="#" class="navbar_toggle_btn">
            <i class="fas fa-bars"></i>
        </a>
    </nav>
<script>
=======
	<nav class="navbar">
		<ul class="navbar_icons">
			<sec:authorize access="isAnonymous()">
				<a href="/user/userLogin">
					<li>Log in</li>
				</a>
				<a href="/user/singUp">
					<li>Sign up</li>
				</a>
			</sec:authorize>

			<sec:authorize access="isAuthenticated()">
				<a class="nav-link" href="/user/userLogout">Logout</a>
			</sec:authorize>
		</ul>
		<a href="#" class="navbar_toggle_btn"> <i class="fas fa-bars"></i>
		</a>
	</nav>
	<script>
>>>>>>> 6c5c74db996c6928eeb8394c1ca243c8fa3f755d
        const togglebtn = document.querySelector('.navbar_toggle_btn');
        const menu = document.querySelector('.navbar_menu');
        const icon = document.querySelector('.navbar_icons');
 
        togglebtn.addEventListener('click', () => {
            menu.classList.toggle('active');
            icon.classList.toggle('active');
        });
</script>