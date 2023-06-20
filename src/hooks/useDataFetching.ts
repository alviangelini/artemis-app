import { useState, useEffect } from 'react';

const useSecondFieldData = (url) => {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const csvData = await response.text();

        // Split the CSV data by lines
        const lines = csvData.split('\n');

        // Extract the second field value from each line
        const secondFieldData = lines.map(line => {
          const values = line.split(',');

          // Check if the line has at least two values
          if (values.length >= 2) {
            return values[1];
          }

          return null;
        });

        // Filter out any null values
        const filteredData = secondFieldData.filter(value => value !== null);

        if (filteredData.length > 0) {
          setData(filteredData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [url]);

  return data;
};

export default useSecondFieldData;
