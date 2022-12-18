import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import moment from "moment";

const SecondPage = () => {
	const [labels, setLabels] = useState([]);
	const [values, setValues] = useState([]);

	useEffect(() => {
		axios
			.get(
				`https://mixpanel.com/api/2.0/segmentation?project_id=2265976&event=Lead&to_date=${moment(
					new Date().toISOString()
				).format("YYYY-MM-DD")}&from_date=${moment(new Date().toISOString())
					.subtract(1, "months")
					.format("YYYY-MM-DD")}`,
				{
					headers: {
						authorization:
							"Basic Sscorpio.3c7850.mp-service-account:VywCy7GwDzgCIs8cdgSrGSgUULuXP2GN",
						Accept: "application/json",
					},
				}
			)
			.then(({ data }) => {
				console.log("Mix Panel Lead Data Fetech", data);

				setLabels(data?.data?.series);

				let leadDetails = data?.data?.values.Lead;

				// console.log('Sort333 lead Values', Object.entries(leadDetails));
				let temp = [];

				Object.entries(leadDetails)
					.sort()
					.forEach((value) => {
						temp.push(value[1]);
					});

				// console.log('Sort lead Values', temp);
				setValues(temp);
			})
			.catch((error) => {
				console.log("Error in Mixpanel data fetch ", error);
			});
	}, []);

	const data = {
		labels: labels,
		datasets: [
			{
				label: "# of Votes",
				data: values,
				fill: false,
				backgroundColor: "rgb(255, 99, 132)",
				borderColor: "rgba(255, 99, 132, 0.2)",
			},
		],
	};

	const options = {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	};

	return (
		<>
			<h1>Second Page</h1>
			<Line data={data} options={options} />
		</>
	);
};

export default SecondPage;
