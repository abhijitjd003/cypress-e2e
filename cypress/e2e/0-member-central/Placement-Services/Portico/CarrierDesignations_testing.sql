
select * from DWProcess.dbo.CarrierDesignationCleanUp with (nolock)

select * from DWProcess.dbo.CarrierDesignationMappingsCleanUp with (nolock)

select cdmc.DesignationID,cdc.DesignationName,cdmc.CleansedCompanyName,cdmc.CleansedCompanyGroup,
cdmc.BusinessType,cdmc.RiskState,cdmc.Region,cdmc.StartDate,cdmc.EndDate
from DWProcess.dbo.CarrierDesignationMappingsCleanUp cdmc with (nolock)
inner join DWProcess.dbo.CarrierDesignationCleanUp cdc with (nolock)
on cdmc.DesignationID=cdc.ID order by cdmc.CleansedCompanyGroup


-- Test Case 1-  mapped carrier names designation should match as per the designation configurations
-- The following query should not return any data
DROP TABLE  IF EXISTS #TEMP
       select distinct T.CarrierName,t.CompanyClassification,Cd.DesignationName, t.MappedCarrierName,t.Region, t.MappedWritingCompany
       INTO #TEMP
             FROM dbo.factPolicyHeader t
       INNER JOIN DWProcess.dbo.CarrierMappingsCleanUp c ON t.CarrierName = c.TransCarrierName
       INNER JOIN DWProcess.dbo.CarrierDesignationMappingsCleanUp d ON d.CleansedCompanyName = c.CleansedCompanyName
             AND d.Region = t.Region	
       INNER JOIN DWProcess.dbo.CarrierDesignationCleanUp cd ON cd.ID = d.DesignationID
       WHERE PolEffDate BETWEEN d.StartDate
                    AND d.EndDate
					and d.Active=1
					AND cd.Active=1
             AND d.BusinessType = 'All'
             AND t.MappedCarrierName IS NOT NULL
			 and t.MappedCarrierNameSet=1
             AND CD.DesignationName <> T.CompanyClassification

-- Get the results for which are not matched designations
		select distinct c.DesignationName,d.DesignationID,d.CleansedCompanyName,d.CleansedCompanyGroup,
		d.BusinessType,d.RiskState,d.Region, d.StartDate,d.EndDate,d.active,d.ModifiedBy
		 from DWprocess.dbo.CarrierDesignationMappingsCleanUp d
		join DWProcess.dbo.CarrierDesignationCleanUp c ON d.designationID = c.ID
		join #TEMP t on  t.MappedCarrierName = d.CleansedCompanyName
		and t.Region = d.Region
		      AND d.BusinessType = 'All'
			  and d.Active=1
		order by d.CleansedCompanyName, d.Region, d.StartDate, d.EndDate

-- Test Case 2-  mapped writting carrier names designation should match as per the designation configurations
-- The following query should not return any data
DROP TABLE  IF EXISTS #TEMP
	select distinct T.CarrierName,t.CompanyClassification,d.DesignationName, t.MappedCarrierName,t.Region, t.MappedWritingCompany
	INTO #TEMP
	FROM dbo.factPolicyHeader  t with (nolock)
	INNER JOIN (	select c.DesignationName,d.* from DWprocess.dbo.CarrierDesignationMappingsCleanUp d
		join DWProcess.dbo.CarrierDesignationCleanUp c ON d.designationID = c.ID)
		d ON d.CleansedCompanyName = t.MappedWritingCompany
		AND d.Region = t.Region
	WHERE PolEffDate BETWEEN d.StartDate
			AND d.EndDate
		AND d.BusinessType = 'All'
		AND t.MappedWritingCompany IS NOT NULL
		and t.MappedCarrierName=t.MappedWritingCompany
		and t.CompanyClassification<>d.DesignationName
		--and t.MappedCarrierName ='Acadia Insurance Company'

-- Get the results for which are not matched designations
		select distinct c.DesignationName,d.* from DWprocess.dbo.CarrierDesignationMappingsCleanUp d
		join DWProcess.dbo.CarrierDesignationCleanUp c ON d.designationID = c.ID
		join #temp t on  t.MappedWritingCompany = d.CleansedCompanyName
		and t.Region = d.Region
		order by d.CleansedCompanyName, d.Region, d.StartDate, d.EndDate

-- Test Case 3-Mapped carrier name isnull and mapped writting company name is not null
-- mapped writting carrier names designation should match as per the designation configurations
-- The following query should not return any data
DROP TABLE  IF EXISTS #TEMP
	select distinct T.CarrierName,t.CompanyClassification,d.DesignationName, t.MappedCarrierName,t.Region, t.MappedWritingCompany
	INTO #TEMP
	FROM dbo.factPolicyHeader  t with (nolock)
	INNER JOIN (	select c.DesignationName,d.* from DWprocess.dbo.CarrierDesignationMappingsCleanUp d
		join DWProcess.dbo.CarrierDesignationCleanUp c ON d.designationID = c.ID)
		d ON d.CleansedCompanyName = t.MappedWritingCompany
		AND d.Region = t.Region
	WHERE PolEffDate BETWEEN d.StartDate
			AND d.EndDate
		AND d.BusinessType = 'All'
		AND t.MappedWritingCompany IS NOT NULL
		and t.MappedCarrierName IS NULL
		and t.CompanyClassification<>d.DesignationName
		--and t.MappedCarrierName ='Acadia Insurance Company'

-- Get the results for which are not matched designations
		select distinct c.DesignationName,d.* from DWprocess.dbo.CarrierDesignationMappingsCleanUp d
		join DWProcess.dbo.CarrierDesignationCleanUp c ON d.designationID = c.ID
		join #temp t on  t.MappedWritingCompany = d.CleansedCompanyName
		and t.Region = d.Region
		order by d.CleansedCompanyName, d.Region, d.StartDate, d.EndDate



-- Test Case 4-  mapped  carrier names designation should match as per the designation configurations
-- The following query should not return any data

DROP TABLE  IF EXISTS #TEMP
	select distinct T.CarrierName,t.CompanyClassification,d.DesignationName, t.MappedCarrierName,t.Region, t.MappedWritingCompany
	INTO #TEMP
	FROM dbo.factFinanceTransactionSummary  t with (nolock)
	INNER JOIN (	select c.DesignationName,d.* from DWprocess.dbo.CarrierDesignationMappingsCleanUp d
		join DWProcess.dbo.CarrierDesignationCleanUp c ON d.designationID = c.ID)
		d ON d.CleansedCompanyName = t.MappedCarrierName
		AND d.Region = t.Region
	WHERE PolEffDate BETWEEN d.StartDate
			AND d.EndDate
		AND d.BusinessType = 'All'
		AND t.MappedCarrierName IS NOT NULL
		and t.CompanyClassification<>d.DesignationName
		--and t.MappedCarrierName ='Acadia Insurance Company'

-- Get the results for which are not matched designations
		select distinct c.DesignationName,d.* from DWprocess.dbo.CarrierDesignationMappingsCleanUp d
		join DWProcess.dbo.CarrierDesignationCleanUp c ON d.designationID = c.ID
		join #temp t on  t.MappedCarrierName = d.CleansedCompanyName
		and t.Region = d.Region
		order by d.CleansedCompanyName, d.Region, d.StartDate, d.EndDate

-- Test Case 5-  mapped writting carrier names designation should match as per the designation configurations
-- The following query should not return any data

DROP TABLE  IF EXISTS #TEMP
	select distinct T.CarrierName,t.CompanyClassification,d.DesignationName, t.MappedCarrierName,t.Region, t.MappedWritingCompany
	INTO #TEMP
	FROM dbo.factFinanceTransactionSummary  t with (nolock)
	INNER JOIN (	select c.DesignationName,d.* from DWprocess.dbo.CarrierDesignationMappingsCleanUp d
		join DWProcess.dbo.CarrierDesignationCleanUp c ON d.designationID = c.ID)
		d ON d.CleansedCompanyName = t.MappedWritingCompany
		AND d.Region = t.Region
	WHERE PolEffDate BETWEEN d.StartDate
			AND d.EndDate
		AND d.BusinessType = 'All'
		AND t.MappedWritingCompany IS NOT NULL
		and t.MappedCarrierName=t.MappedWritingCompany
		and t.CompanyClassification<>d.DesignationName
		--and t.MappedCarrierName ='Acadia Insurance Company'

-- Get the results for which are not matched designations
		select distinct c.DesignationName,d.* from DWprocess.dbo.CarrierDesignationMappingsCleanUp d
		join DWProcess.dbo.CarrierDesignationCleanUp c ON d.designationID = c.ID
		join #temp t on  t.MappedWritingCompany = d.CleansedCompanyName
		and t.Region = d.Region
		order by d.CleansedCompanyName, d.Region, d.StartDate, d.EndDate


-- Test Case 6-Mapped carrier name isnull and mapped writting company name is not null
-- mapped writting carrier names designation should match as per the designation configurations
-- The following query should not return any data
DROP TABLE  IF EXISTS #TEMP
	select distinct T.CarrierName,t.CompanyClassification,d.DesignationName, t.MappedCarrierName,t.Region, t.MappedWritingCompany
	INTO #TEMP
	FROM dbo.factFinanceTransactionSummary  t with (nolock)
	INNER JOIN (	select c.DesignationName,d.* from DWprocess.dbo.CarrierDesignationMappingsCleanUp d
		join DWProcess.dbo.CarrierDesignationCleanUp c ON d.designationID = c.ID)
		d ON d.CleansedCompanyName = t.MappedWritingCompany
		AND d.Region = t.Region
	WHERE PolEffDate BETWEEN d.StartDate
			AND d.EndDate
		AND d.BusinessType = 'All'
		AND t.MappedWritingCompany IS NOT NULL
		and t.MappedCarrierName IS NULL
		and t.CompanyClassification<>d.DesignationName
		--and t.MappedCarrierName ='Acadia Insurance Company'

-- Get the results for which are not matched designations
		select distinct c.DesignationName,d.* from DWprocess.dbo.CarrierDesignationMappingsCleanUp d
		join DWProcess.dbo.CarrierDesignationCleanUp c ON d.designationID = c.ID
		join #temp t on  t.MappedWritingCompany = d.CleansedCompanyName
		and t.Region = d.Region
		order by d.CleansedCompanyName, d.Region, d.StartDate, d.EndDate

