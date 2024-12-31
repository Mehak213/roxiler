import React, { useEffect, useState } from "react";

const Statistics = ({ selectedMonth }) => {
    const [stats, setStats] = useState({
        totalSales: 0,
        totalSoldItems: 0,
        totalNotSoldItems: 0,
    });

    useEffect(() => {
        // Fetch statistics data from API for the selected month
        const fetchStatistics = async () => {
            try {
                const response = await fetch(
                    `https://api.example.com/statistics?month=${selectedMonth}`
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch statistics");
                }
                const data = await response.json();
                setStats({
                    totalSales: data.totalSales,
                    totalSoldItems: data.totalSoldItems,
                    totalNotSoldItems: data.totalNotSoldItems,
                });
            } catch (error) {
                console.error("Error fetching statistics:", error);
            }
        };

        fetchStatistics();
    }, [selectedMonth]); // Re-run whenever selectedMonth changes

    return (
        <div className="statistics-container">
            <h2>Statistics - {selectedMonth}</h2>
            <div className="stats-box">
                <p><strong>Total Sales:</strong> {stats.totalSales}</p>
                <p><strong>Total Sold Items:</strong> {stats.totalSoldItems}</p>
                <p><strong>Total Not Sold Items:</strong> {stats.totalNotSoldItems}</p>
            </div>
        </div>
    );
};


