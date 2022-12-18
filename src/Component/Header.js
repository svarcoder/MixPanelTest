import React from "react";

const Header = () => {
	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "flex-start",
				}}>
				<a
					href='/'
					class='btn btn-primary'
					style={{
						margin: "10px",
					}}>
					Home
				</a>
				<a
					href='/Second'
					class='btn btn-secondary'
					style={{
						margin: "10px",
					}}>
					Second Page
				</a>
				<a
					href='/third'
					class='btn btn-success'
					style={{
						margin: "10px",
					}}>
					Third Page
				</a>
			</div>
		</>
	);
};

export default Header;
