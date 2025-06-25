
 Car Loan Default Prediction with Random Forest
 
**Introduction**

This project addresses the issue of increasing loan defaults in a car loan providing company. To enhance the accuracy and reliability of loan approvals, a Random Forest algorithm is implemented to predict the probability of a customer defaulting on a loan. The target variable for prediction is "default payment next month".

**Dataset**

The dataset used in this analysis is sourced from UCI's data repository. It contains various features related to credit card clients, including:

Credit limit (LIMIT_BAL)
Prior payment status (PAY_0, PAY_2...PAY_6)
Bill amounts (BILL_AMT variables)
Payment amounts (PAY_AMT variables)
Target variable: default payment next month (renamed to DEFAULT for clarity)
The ID column is dropped as it does not contribute to the analysis.

**Project Goal**

The primary goal of this project is to build a predictive model using the Random Forest algorithm to identify customers who are likely to default on their car loans, thereby improving the loan underwriting process and reducing default rates.


The notebook covers the following key steps:

Importing Libraries: Essential libraries for data manipulation, visualization, and machine learning are imported (e.g., numpy, pandas, matplotlib.pyplot, seaborn, sklearn modules).

Data Loading and Initial Exploration: The dataset is loaded, and a preliminary inspection of the data structure (e.g., df.head()) is performed to understand its contents and quality.

Data Preprocessing: Columns are renamed (default payment next month to DEFAULT), and irrelevant columns (ID) are removed to prepare the data for modeling.

Model Building: A Random Forest Classifier is utilized to build the predictive model.
Model Evaluation: The performance of the model is evaluated to determine its effectiveness in predicting loan defaults. (Details on evaluation metrics and specific steps would be found within the notebook's subsequent cells).

How to Run the Notebook

Ensure you have a Python environment with the necessary libraries installed. You can install them using pip:
Bash

pip install numpy pandas matplotlib seaborn scikit-learn openpyxl

Open the LOAN.ipynb file using Jupyter Notebook or JupyterLab.
Execute the cells sequentially to run the analysis and model training.

**Conclusion**

This notebook provides a robust approach to predicting car loan defaults using a Random Forest algorithm, aiming to make the underwriting process more accurate and reliable.

Recall

F1 Score

ROC-AUC

