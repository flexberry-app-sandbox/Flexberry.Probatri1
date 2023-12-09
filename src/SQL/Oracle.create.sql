



CREATE TABLE "ТЧРегВхГост"
(

	"primaryKey" RAW(16) NOT NULL,

	"Гость" RAW(16) NOT NULL,

	"Карты" RAW(16) NOT NULL,

	"ФормаРегВхода" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ФормаРегВхода"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"Комната" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Карты"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодКарты" NUMBER(10) NULL,

	"ТипКарты" NVARCHAR2(13) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Комната"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"Этаж" NUMBER(10) NULL,

	"КолвоКроват" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должности"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодДолжности" NUMBER(10) NULL,

	"Должность" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧРегВхСот"
(

	"primaryKey" RAW(16) NOT NULL,

	"Примечания" NVARCHAR2(255) NULL,

	"Сотрудник" RAW(16) NOT NULL,

	"ФормаРегВхода" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сотрудник"
(

	"primaryKey" RAW(16) NOT NULL,

	"Фамилия" NVARCHAR2(255) NULL,

	"Имя" NVARCHAR2(255) NULL,

	"Отчество" NVARCHAR2(255) NULL,

	"ДатаРождения" DATE NULL,

	"СерНомПаспорта" NUMBER(10) NULL,

	"Телефон" NUMBER(10) NULL,

	"Должности" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ФормаРегКарт"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"Карты" RAW(16) NOT NULL,

	"Комната" RAW(16) NOT NULL,

	"Гость" RAW(16) NOT NULL,

	"Сотрудник" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧРегВхСотр"
(

	"primaryKey" RAW(16) NOT NULL,

	"Сотрудник" RAW(16) NOT NULL,

	"ФормаРегВхода" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Гость"
(

	"primaryKey" RAW(16) NOT NULL,

	"Фамилия" NVARCHAR2(255) NULL,

	"Имя" NVARCHAR2(255) NULL,

	"Отчество" NVARCHAR2(255) NULL,

	"ДатаРождения" DATE NULL,

	"СерНомПаспорта" NUMBER(10) NULL,

	"Телефон" NUMBER(10) NULL,

	"Почта" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "ТЧРегВхГост"
	ADD CONSTRAINT "ТЧРегВхГост_F_8213" FOREIGN KEY ("Гость") REFERENCES "Гость" ("primaryKey");

CREATE INDEX "ТЧРегВхГост_I_4111" on "ТЧРегВхГост" ("Гость");

ALTER TABLE "ТЧРегВхГост"
	ADD CONSTRAINT "ТЧРегВхГост_F_6019" FOREIGN KEY ("Карты") REFERENCES "Карты" ("primaryKey");

CREATE INDEX "ТЧРегВхГост_I_9570" on "ТЧРегВхГост" ("Карты");

ALTER TABLE "ТЧРегВхГост"
	ADD CONSTRAINT "ТЧРегВхГост_F_1522" FOREIGN KEY ("ФормаРегВхода") REFERENCES "ФормаРегВхода" ("primaryKey");

CREATE INDEX "ТЧРегВхГост_I_6579" on "ТЧРегВхГост" ("ФормаРегВхода");

ALTER TABLE "ФормаРегВхода"
	ADD CONSTRAINT "ФормаРегВход_7311" FOREIGN KEY ("Комната") REFERENCES "Комната" ("primaryKey");

CREATE INDEX "ФормаРегВход_6873" on "ФормаРегВхода" ("Комната");

ALTER TABLE "ТЧРегВхСот"
	ADD CONSTRAINT "ТЧРегВхСот_FС_2196" FOREIGN KEY ("Сотрудник") REFERENCES "Сотрудник" ("primaryKey");

CREATE INDEX "ТЧРегВхСот_IС_4739" on "ТЧРегВхСот" ("Сотрудник");

ALTER TABLE "ТЧРегВхСот"
	ADD CONSTRAINT "ТЧРегВхСот_FФ_3487" FOREIGN KEY ("ФормаРегВхода") REFERENCES "ФормаРегВхода" ("primaryKey");

CREATE INDEX "ТЧРегВхСот_IФ_9211" on "ТЧРегВхСот" ("ФормаРегВхода");

ALTER TABLE "Сотрудник"
	ADD CONSTRAINT "Сотрудник_FДо_3036" FOREIGN KEY ("Должности") REFERENCES "Должности" ("primaryKey");

CREATE INDEX "Сотрудник_IДо_2503" on "Сотрудник" ("Должности");

ALTER TABLE "ФормаРегКарт"
	ADD CONSTRAINT "ФормаРегКарт__3297" FOREIGN KEY ("Карты") REFERENCES "Карты" ("primaryKey");

CREATE INDEX "ФормаРегКарт__4712" on "ФормаРегКарт" ("Карты");

ALTER TABLE "ФормаРегКарт"
	ADD CONSTRAINT "ФормаРегКарт__5915" FOREIGN KEY ("Комната") REFERENCES "Комната" ("primaryKey");

CREATE INDEX "ФормаРегКарт__6205" on "ФормаРегКарт" ("Комната");

ALTER TABLE "ФормаРегКарт"
	ADD CONSTRAINT "ФормаРегКарт__5491" FOREIGN KEY ("Гость") REFERENCES "Гость" ("primaryKey");

CREATE INDEX "ФормаРегКарт__9260" on "ФормаРегКарт" ("Гость");

ALTER TABLE "ФормаРегКарт"
	ADD CONSTRAINT "ФормаРегКарт__6362" FOREIGN KEY ("Сотрудник") REFERENCES "Сотрудник" ("primaryKey");

CREATE INDEX "ФормаРегКарт__7564" on "ФормаРегКарт" ("Сотрудник");

ALTER TABLE "ТЧРегВхСотр"
	ADD CONSTRAINT "ТЧРегВхСотр_FС_563" FOREIGN KEY ("Сотрудник") REFERENCES "Сотрудник" ("primaryKey");

CREATE INDEX "ТЧРегВхСотр_I_4273" on "ТЧРегВхСотр" ("Сотрудник");

ALTER TABLE "ТЧРегВхСотр"
	ADD CONSTRAINT "ТЧРегВхСотр_F_1540" FOREIGN KEY ("ФормаРегВхода") REFERENCES "ФормаРегВхода" ("primaryKey");

CREATE INDEX "ТЧРегВхСотр_I_6817" on "ТЧРегВхСотр" ("ФормаРегВхода");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


