<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/security/tags"
	prefix="sec"%>
<%@ include file="../include/header.jsp"%>
<link rel="stylesheet" href="/resources/css/user/userLogin.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<div class="choice-sector">
	<div class="choice-sector-content">
		<section class="choice">
			<div class="choice_top">
				<h1>로그인</h1>
			</div>
		</section>
		<div class="choice_btn">
			<span class="login_sector"> <input type="button"
				class="login_btn" value="L O G I N">
			</span> <span class="signup_sector"> <a href="/user/signUp"> <input
					type="button" class="signup_btn" value="S I G N U P">
			</a>
			</span>
		</div>
		<section class="logo"></section>
		<form id="loginForm" action="/login" method="post">
			<section class="customer">
				<div class="customer_inform">
					<div class="customer_inform_id_sector">
						<input type="text" class="customer_inform_id" name="username"
							placeholder="아이디를 입력하세요.">
					</div>
					<div class="customer_inform_pass_sector">
						<input type="password" class="customer_inform_pass"
							name="password" placeholder="비밀번호를 입력하세요.">
					</div>
				</div>
			</section>
			<section class="remember">
				<div class="remeber_id">
					<input type="checkbox" name="remember-me"> 아이디 저장하기
				</div>
			</section>
			<section class="connect_sector">
				<div>
					<input type="submit" id="loginBtn" class="connect_btn"
						value="Login">
				</div>
				<input type="hidden" name="${_csrf.parameterName}"
					value="${_csrf.token}" />
				<div class="findcustomer">
					<a href="/user/findMyId">아이디찾기</a> / <a href="/mail/sendEmail">비밀번호찾기</a>
				</div>
			</section>
		</form>
	</div>
</div>
<script src="/resources/js/userLogin.js"></script>
<%@ include file="../include/footer.jsp"%>