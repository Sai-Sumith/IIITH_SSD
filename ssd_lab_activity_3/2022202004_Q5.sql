select d.Dnumber,de.counts,de.Essn from DEPARTMENT AS d inner join (select count(Dependent_name) as counts,Essn from DEPENDENT  group by Essn having Essn in 
(select Mgr_ssn from DEPARTMENT WHERE Dnumber in (select Dnumber from DEPT_LOCATIONS group by Dnumber having count(Dnumber)>1))) as de on d.Mgr_ssn=de.Essn;
