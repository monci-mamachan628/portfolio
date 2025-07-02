# 💊 Medicare Drug Prescriptions & Cost Analysis – 2023 🧠📈

This project presents an intermediate-level data analytics case study using the **2023 Medicare Part D Prescriber Public Use File** (PUF). It aims to explore prescription costs, drug classes, demographic disparities, and public health trends in the U.S. using **Python (Pandas, Matplotlib, Seaborn)**.

---

## 📂 Dataset Overview

The dataset includes:
- **Brand & Generic Drug Names**
- **Total Claims**, **Total 30-Day Fills**
- **Drug Costs**, **Beneficiary Counts**
- **Flags** for:
  - Opioid, Antibiotic, Antipsychotic Drugs
  - 65+ Age Claims (Ge65)
  - LIS (Low-Income Subsidy) vs Non-LIS cost shares

> 🔗 Data Source: [CMS Medicare Part D Prescriber Data 2023](https://data.cms.gov)

---

## 📌 Project Objectives

1. **Identify High-Cost Drugs**
2. **Compare Generic vs Brand Drug Usage**
3. **Analyze Usage Among 65+ Beneficiaries**
4. **Classify Drugs by Type** (Opioid, Antibiotic, etc.)
5. **Evaluate Cost Sharing** (LIS vs Non-LIS)
6. **Explore Public Health Implications**

---

## 🔧 Tech Stack

- **Language**: Python
- **Libraries**:
  - `pandas` – data wrangling
  - `matplotlib`, `seaborn` – visualizations
  - `numpy` – numerical calculations
- **Tools**: Jupyter Notebook, Google Colab

---

## 🔍 Key Insights

### 💰 Top 10 Costliest Drugs
```plaintext
1. Eliquis – $18.2B
2. Ozempic – $9.2B
...
