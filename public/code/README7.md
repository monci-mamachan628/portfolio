# Ireland's Healthcare Waiting List Crisis Analysis

## Overview

This analysis examines the scale and structure of hospital waiting lists in Ireland. It focuses on how long patients wait for outpatient appointments and inpatient or day-case treatment, and on the uneven pressure experienced across specialties and regions.

## Key Questions

- How has the number of patients waiting changed over time?
- Which specialties carry the largest backlogs?
- How many patients have been waiting longer than clinically acceptable targets?
- Do waiting times differ across hospitals or geographic areas?

## Analytical Approach

The project uses publicly available Irish healthcare waiting-list data. The workflow includes:

1. Cleaning monthly waiting-list extracts and standardising specialty and hospital names.
2. Separating outpatient, inpatient, and day-case activity.
3. Measuring total backlog, long-wait cohorts, and month-over-month change.
4. Comparing the distribution of waits rather than relying only on the average.
5. Highlighting specialties and locations where capacity pressure is most persistent.

## Findings To Investigate

The analysis is designed to make the persistent nature of the crisis visible: a large total queue can conceal a smaller but high-risk group waiting for an extended period. Trend comparisons should distinguish genuine reductions in demand from changes caused by reporting coverage, reclassification, or patients being removed from a list.

Specialty-level comparisons are especially important because national totals can hide bottlenecks in areas such as orthopaedics, ophthalmology, and ear, nose and throat services. A useful dashboard should therefore show both the national trend and the composition of the backlog.

## Recommended Actions

- Publish consistent monthly definitions and revision notes.
- Track the number of patients by waiting-time band and specialty.
- Pair waiting-list figures with completed activity and referral demand.
- Prioritise long-wait patients while protecting urgent-care capacity.
- Compare hospital-level performance using transparent, comparable measures.

## Tools

- Python
- Pandas
- Matplotlib / Seaborn
- Power BI

## Note

Waiting-list figures are indicators of service pressure, not a direct measure of individual clinical need. Any policy conclusion should be interpreted alongside urgency, cancellations, referrals, available capacity, and patient outcomes.
