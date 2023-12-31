import { DocumentModel, DocumentType } from "../index";

enum Form1003EntityIds {
    "LENDER_LOAN_NUMBER" = "lender_loan_number",
    "AGENCY_CASE_NUMBER" = "agency_case_number",
    "BORROWER_NAME_1A" = "borrower_name_1a",
    "BORROWER_SOCIAL_SECURITY_NUMBER_1A" = "borrower_social_security_number_1a",
    "BORROWER_DATE_OF_BIRTH_1A" = "borrower_date_of_birth_1a",
    "BORROWER_CITIZENSHIP_1A" = "borrower_citizenship_1a",
    "BORROWER_MARTIAL_STATUS" = "borrower_martial_status",
    "BORROWER_DEPENDANTS_NUMBER_1A" = "borrower_dependants_number_1a",
    "BORROWER_DEPENDANTS_AGES_1A" = "borrower_dependants_ages_1a",
    "BORROWER_HOME_PHONE_1A" = "borrower_home_phone_1a",
    "BORROWER_CELL_PHONE_1A" = "borrower_cell_phone_1a",
    "BORROWER_WORK_PHONE_1A" = "borrower_work_phone_1a",
    "BORROWER_EMAIL_1A" = "borrower_email_1a",
    "BORROWER_CURRENT_ADDRESS_STREET_1A" = "borrower_current_address_street_1a",
    "BORROWER_CURRENT_ADDRESS_CITY_1A" = "borrower_current_address_city_1a",
    "BORROWER_CURRENT_ADDRESS_STATE_1A" = "borrower_current_address_state_1a",
    "BORROWER_CURRENT_ADDRESS_UNIT_1A" = "borrower_current_address_unit_1a",
    "BORROWER_CURRENT_ADDRESS_COUNTRY_1A" =
    "borrower_current_address_country_1a",
    "BORROWER_CURRENT_ADDRESS_ZIP_1A" = "borrower_current_address_zip_1a",
    "BORROWER_CURRENT_ADDRESS_LIVED_YEARS_1A" =
    "borrower_current_address_lived_years_1a",
    "BORROWER_CURRENT_ADDRESS_LIVED_MONTHS_1A" =
    "borrower_current_address_lived_months_1a",
    "BORROWER_CURRENT_ADDRESS_HOUSING_TYPE" =
    "borrower_current_address_housing_type",
    "BORROWER_CURRENT_ADDRESS_RENT_PRICE_1A" =
    "borrower_current_address_rent_price_1a",
    "BORROWER_FORMER_ADDRESS_DOESNT_APPLY_1A" =
    "borrower_former_address_doesnt_apply_1a",
    "BORROWER_FORMER_ADDRESS_STREET_1A" = "borrower_former_address_street_1a",
    "BORROWER_FORMER_ADDRESS_CITY_1A" = "borrower_former_address_city_1a",
    "BORROWER_FORMER_ADDRESS_STATE_1A" = "borrower_former_address_state_1a",
    "BORROWER_FORMER_ADDRESS_ZIP_1A" = "borrower_former_address_zip_1a",
    "BORROWER_FORMER_ADDRESS_UNIT_1A" = "borrower_former_address_unit_1a",
    "BORROWER_FORMER_ADDRESS_COUNTRY_1A" = "borrower_former_address_country_1a",
    "BORROWER_FORMER_ADDRESS_LIVED_YEARS_1A" =
    "borrower_former_address_lived_years_1a",
    "BORROWER_FORMER_ADDRESS_LIVED_MONTHS_1A" =
    "borrower_former_address_lived_months_1a",
    "BORROWER_FORMER_ADDRESS_HOUSING_TYPE_1A" =
    "borrower_former_address_housing_type_1a",
    "BORROWER_FORMER_ADDRESS_RENT_PRICE_1A" =
    "borrower_former_address_rent_price_1a",
    "BORROWER_MAILING_ADDRESS_DOESNT_APPLY_1A" =
    "borrower_mailing_address_doesnt_apply_1a",
    "BORROWER_MAILING_ADDRESS_STREET_1A" = "borrower_mailing_address_street_1a",
    "BORROWER_MAILING_ADDRESS_CITY_1A" = "borrower_mailing_address_city_1a",
    "BORROWER_MAILING_ADDRESS_STATE_1A" = "borrower_mailing_address_state_1a",
    "BORROWER_MAILING_ADDRESS_ZIP_1A" = "borrower_mailing_address_zip_1a",
    "BORROWER_MAILING_ADDRESS_COUNTRY_1A" =
    "borrower_mailing_address_country_1a",
    "BORROWER_MAILING_ADDRESS_UNIT_1A" = "borrower_mailing_address_unit_1a",
    "CURRENT_EMPLOYMENT_NAME_1B" = "current_employment_name_1b",
    "CURRENT_EMPLOYMENT_STREET_1B" = "current_employment_street_1b",
    "CURRENT_EMPLOYMENT_CITY_1B" = "current_employment_city_1b",
    "CURRENT_EMPLOYMENT_STATE_1B" = "current_employment_state_1b",
    "CURRENT_EMPLOYMENT_ZIP_1B" = "current_employment_zip_1b",
    "CURRENT_EMPLOYMENT_COUNTRY_1B" = "current_employment_country_1b",
    "CURRENT_EMPLOYMENT_UNIT_1B" = "current_employment_unit_1b",
    "CURRENT_EMPLOYMENT_PHONE_1B" = "current_employment_phone_1b",
    "CURRENT_EMPLOYMENT_POSITION_OR_TITLE_1B" =
    "current_employment_position_or_title_1b",
    "CURRENT_EMPLOYMENT_DOES_NOT_APPLY_1B" =
    "current_employment_does_not_apply_1b",
    "CURRENT_EMPLOYMENT_START_DATE_1B" = "current_employment_start_date_1b",
    "CURRENT_EMPLOYMENT_LINE_OF_WORK_YEARS_1B" =
    "current_employment_line_of_work_years_1b",
    "CURRENT_EMPLOYMENT_LINE_OF_WORK_MONTHS_1B" =
    "current_employment_line_of_work_months_1b",
    "CURRENT_EMPLOYMENT_EMPLOYED_BY_FAMILY_MEMBER_1B" =
    "current_employment_employed_by_family_member_1b",
    "CURRENT_EMPLOYMENT_BUSINESS_OWNER_OR_SELF_EMPLOYED_1B" =
    "current_employment_business_owner_or_self_employed_1b",
    "CURRENT_EMPLOYMENT_OWNERSHIP_SHARE_LESS_25_1B" =
    "current_employment_ownership_share_less_25_1b",
    "CURRENT_EMPLOYMENT_OWNERSHIP_SHARE_MORE_25_1B" =
    "current_employment_ownership_share_more_25_1b",
    "CURRENT_EMPLOYMENT_MONTHLY_INCOME_OR_LOSS_1B" =
    "current_employment_monthly_income_or_loss_1b",
    "CURRENT_EMPLOYMENT_GROSS_MONTHLY_INCOME_BASE_1B" =
    "current_employment_gross_monthly_income_base_1b",
    "CURRENT_EMPLOYMENT_GROSS_MONTHLY_INCOME_OVERTIME_1B" =
    "current_employment_gross_monthly_income_overtime_1b",
    "CURRENT_EMPLOYMENT_GROSS_MONTHLY_INCOME_BONUS_1B" =
    "current_employment_gross_monthly_income_bonus_1b",
    "CURRENT_EMPLOYMENT_GROSS_MONTHLY_INCOME_COMMISSION_1B" =
    "current_employment_gross_monthly_income_commission_1b",
    "CURRENT_EMPLOYMENT_GROSS_MONTHLY_INCOME_MILITARY_1B" =
    "current_employment_gross_monthly_income_military_1b",
    "CURRENT_EMPLOYMENT_GROSS_MONTHLY_INCOME_OTHER_1B" =
    "current_employment_gross_monthly_income_other_1b",
    "CURRENT_EMPLOYMENT_GROSS_MONTHLY_INCOME_TOTAL_1B" =
    "current_employment_gross_monthly_income_total_1b",
    "ADDITIONAL_EMPLOYMENT_BUSINESS_NAME_1C" =
    "additional_employment_business_name_1c",
    "ADDITIONAL_EMPLOYMENT_BUSINESS_PHONE_1C" =
    "additional_employment_business_phone_1c",
    "ADDITIONAL_EMPLOYMENT_BUSINESS_STREET_1C" =
    "additional_employment_business_street_1c",
    "ADDITIONAL_EMPLOYMENT_BUSINESS_UNIT_1C" =
    "additional_employment_business_unit_1c",
    "ADDITIONAL_EMPLOYMENT_BUSINESS_CITY_1C" =
    "additional_employment_business_city_1c",
    "ADDITIONAL_EMPLOYMENT_BUSINESS_STATE_1C" =
    "additional_employment_business_state_1c",
    "ADDITIONAL_EMPLOYMENT_BUSINESS_ZIP_1C" =
    "additional_employment_business_zip_1c",
    "ADDITIONAL_EMPLOYMENT_BUSINESS_COUNTRY_1C" =
    "additional_employment_business_country_1c",
    "ADDITIONAL_EMPLOYMENT_POSITION_OR_TITLE_1C" =
    "additional_employment_position_or_title_1c",
    "ADDITIONAL_EMPLOYMENT_START_DATE_1C" =
    "additional_employment_start_date_1c",
    "ADDITIONAL_EMPLOYMENT_LINE_OF_WORK_YEARS_1C" =
    "additional_employment_line_of_work_years_1c",
    "ADDITIONAL_EMPLOYMENT_LINE_OF_WORK_MONTHS_1C" =
    "additional_employment_line_of_work_months_1c",
    "ADDITIONAL_EMPLOYMENT_BUSINESS_OWNER_OR_SELF_EMPLOYED_1C" =
    "additional_employment_business_owner_or_self_employed_1c",
    "ADDITIONAL_EMPLOYMENT_HAVE_LESS_THAN_25_OWNERSHIP_1C" =
    "additional_employment_have_less_than_25_ownership_1c",
    "ADDITIONAL_EMPLOYMENT_HAVE_MORE_THAN_25_OWNERSHIP_1C" =
    "additional_employment_have_more_than_25_ownership_1c",
    "ADDITIONAL_EMPLOYMENT_MONTHLY_INCOME_1C" =
    "additional_employment_monthly_income_1c",
    "ADDITIONAL_EMPLOYMENT_DOES_NOT_APPLY_1C" =
    "additional_employment_does_not_apply_1c",
    "ADDITIONAL_EMPLOYMENT_GROSS_MONTHLY_INCOME_BASE_1C" =
    "additional_employment_gross_monthly_income_base_1c",
    "ADDITIONAL_EMPLOYMENT_GROSS_MONTHLY_INCOME_OVERTIME_1C" =
    "additional_employment_gross_monthly_income_overtime_1c",
    "ADDITIONAL_EMPLOYMENT_GROSS_MONTHLY_INCOME_BONUS_1C" =
    "additional_employment_gross_monthly_income_bonus_1c",
    "ADDITIONAL_EMPLOYMENT_GROSS_MONTHLY_INCOME_COMMISION_1C" =
    "additional_employment_gross_monthly_income_commision_1c",
    "ADDITIONAL_EMPLOYMENT_GROSS_MONTHLY_INCOME_MILITARY_1C" =
    "additional_employment_gross_monthly_income_military_1c",
    "ADDITIONAL_EMPLOYMENT_GROSS_MONTHLY_INCOME_OTHER_1C" =
    "additional_employment_gross_monthly_income_other_1c",
    "ADDITIONAL_EMPLOYMENT_GROSS_MONTHLY_INCOME_TOTAL_1C" =
    "additional_employment_gross_monthly_income_total_1c",
    "PREVIOUS_EMPLOYMENT_DOES_NOT_APPLY_1D" =
    "previous_employment_does_not_apply_1d",
    "PREVIOUS_EMPLOYMENT_BUSINESS_NAME_1D" =
    "previous_employment_business_name_1d",
    "PREVIOUS_EMPLOYMENT_BUSINESS_STREET_1D" =
    "previous_employment_business_street_1d",
    "PREVIOUS_EMPLOYMENT_BUSINESS_CITY_1D" =
    "previous_employment_business_city_1d",
    "PREVIOUS_EMPLOYMENT_BUSINESS_STATE_1D" =
    "previous_employment_business_state_1d",
    "PREVIOUS_EMPLOYMENT_BUSINESS_ZIP_1D" =
    "previous_employment_business_zip_1d",
    "PREVIOUS_EMPLOYMENT_BUSINESS_COUNTRY_1D" =
    "previous_employment_business_country_1d",
    "PREVIOUS_EMPLOYMENT_BUSINESS_UNIT_1D" =
    "previous_employment_business_unit_1d",
    "PREVIOUS_EMPLOYMENT_POSITION_OR_TITLE_1D" =
    "previous_employment_position_or_title_1d",
    "PREVIOUS_EMPLOYMENT_START_DATE_1D" = "previous_employment_start_date_1d",
    "PREVIOUS_EMPLOYMENT_END_DATE_1D" = "previous_employment_end_date_1d",
    "PREVIOUS_EMPLOYMENT_BUSINESS_OWNER_OR_SELF_EMPLOYED_1D" =
    "previous_employment_business_owner_or_self_employed_1d",
    "PREVIOUS_EMPLOYMENT_GROSS_MONTHLY_INCOME_1D" =
    "previous_employment_gross_monthly_income_1d",
    "INCOME_FROM_OTHER_SOURCES_DOES_NOT_APPLY_1E" =
    "income_from_other_sources_does_not_apply_1e",
    "ASSET_ACCOUNT_2A" = "asset_account_2a",
    "INCOME_FROM_OTHER_SOURCES_1E" = "income_from_other_sources_1e",
    "ASSET_ACCOUNTS_TOTAL_VALUE_2A" = "asset_accounts_total_value_2a",
    "OTHER_ASSET_OR_CREDIT_2B" = "other_asset_or_credit_2b",
    "LIABILITY_2C" = "liability_2c",
    "LIABILITIES_DOES_NOT_APPLY_2C" = "liabilities_does_not_apply_2c",
    "OTHER_LIABILITIES_AND_EXPENSES_DOES_NOT_APPLY_2D" =
    "other_liabilities_and_expenses_does_not_apply_2d",
    "OTHER_LIABILITY_AND_EXPENSES_2D" = "other_liability_and_expenses_2d",
    "ADDITIONAL_EMPLOYMENT_EMPLOYED_BY_FAMILY_MEMBER_1C" =
    "additional_employment_employed_by_family_member_1c",
    "INCOME_FROM_OTHER_SOURCES_TOTAL_AMOUNT_1E" =
    "income_from_other_sources_total_amount_1e",
    "OTHER_ASSETS_AND_CREDIT_DOES_NOT_APPLY_2B" =
    "other_assets_and_credit_does_not_apply_2b",
    "OTHER_ASSETS_AND_CREDITS_TOTAL_AMOUNT_2B" =
    "other_assets_and_credits_total_amount_2b",
    "ASSET_ACCOUNT_2A:ACCOUNT_TYPE" = "asset_account_2a:account_type",
    "ASSET_ACCOUNT_2A:FINANCIAL_INSTITUTION" =
    "asset_account_2a:financial_institution",
    "ASSET_ACCOUNT_2A:ACCOUNT_NUMBER" = "asset_account_2a:account_number",
    "ASSET_ACCOUNT_2A:CASH_OR_MARKET_VALUE" =
    "asset_account_2a:cash_or_market_value",
    "INCOME_FROM_OTHER_SOURCES_1E:MONTHLY_INCOME" =
    "income_from_other_sources_1e:monthly_income",
    "INCOME_FROM_OTHER_SOURCES_1E:INCOME_SOURCE_NAME" =
    "income_from_other_sources_1e:income_source_name",
    "OTHER_ASSET_OR_CREDIT_2B:ASSET_OR_CREDIT_TYPE" =
    "other_asset_or_credit_2b:asset_or_credit_type",
    "OTHER_ASSET_OR_CREDIT_2B:CASH_OR_MARKET_VALUE" =
    "other_asset_or_credit_2b:cash_or_market_value",
    "LIABILITY_2C:ACCOUNT_TYPE" = "liability_2c:account_type",
    "LIABILITY_2C:COMPANY_NAME" = "liability_2c:company_name",
    "LIABILITY_2C:ACCOUNT_NUMBER" = "liability_2c:account_number",
    "LIABILITY_2C:UNPAID_BALANCE" = "liability_2c:unpaid_balance",
    "LIABILITY_2C:TO_BE_PAID_OFF_AT_OR_BEFORE_CLOSING" =
    "liability_2c:to_be_paid_off_at_or_before_closing",
    "LIABILITY_2C:MONTHLY_PAYMENT" = "liability_2c:monthly_payment",
    "OTHER_LIABILITY_AND_EXPENSES_2D:LIABILITY_NAME" =
    "other_liability_and_expenses_2d:liability_name",
    "OTHER_LIABILITY_AND_EXPENSES_2D:MONTHLY_PAYMENT" =
    "other_liability_and_expenses_2d:monthly_payment",
}

const documentModel: DocumentModel<Form1003EntityIds> = {
    //Section 1a
    application: {
        label: "Application information",
        fields: {
            loanNumber: { key: Form1003EntityIds.LENDER_LOAN_NUMBER, label: "Lender loan no." },
            agencyCaseNumber: { key: Form1003EntityIds.AGENCY_CASE_NUMBER, label: "Agency case no." }
        }
    },
    borrower: {
        label: "Borrower information (1a)",
        fields: {
            name: { key: Form1003EntityIds.BORROWER_NAME_1A, label: "Name" },
            ssn: { key: Form1003EntityIds.BORROWER_SOCIAL_SECURITY_NUMBER_1A, label: "SSN" },
            dob: { key: Form1003EntityIds.BORROWER_DATE_OF_BIRTH_1A, label: "Date of Birth" },
            dependentsNumber: {
                key: Form1003EntityIds.BORROWER_DEPENDANTS_NUMBER_1A,
                label: "Dependents number",
            },
            dependentsAges: {
                key: Form1003EntityIds.BORROWER_DEPENDANTS_AGES_1A,
                label: "Dependents ages",
            },
            phoneHome: { key: Form1003EntityIds.BORROWER_HOME_PHONE_1A, label: "Home phone" },
            phoneCell: { key: Form1003EntityIds.BORROWER_CELL_PHONE_1A, label: "Cell phone" },
            phoneWork: { key: Form1003EntityIds.BORROWER_WORK_PHONE_1A, label: "Work phone" },
            email: { key: Form1003EntityIds.BORROWER_EMAIL_1A, label: "Email" },
        },
    },
    currentAddress: {
        label: "Current Address (1a)",
        fields: {
            street: {
                key: Form1003EntityIds.BORROWER_CURRENT_ADDRESS_STREET_1A,
                label: "Street",
            },
            unit: {
                key: Form1003EntityIds.BORROWER_CURRENT_ADDRESS_UNIT_1A,
                label: "Unit",
            },
            city: { key: Form1003EntityIds.BORROWER_CURRENT_ADDRESS_CITY_1A, label: "City" },
            state: {
                key: Form1003EntityIds.BORROWER_CURRENT_ADDRESS_STATE_1A,
                label: "State",
            },
            zip: { key: Form1003EntityIds.BORROWER_CURRENT_ADDRESS_ZIP_1A, label: "ZIP" },
            country: {
                key: Form1003EntityIds.BORROWER_CURRENT_ADDRESS_COUNTRY_1A,
                label: "Country",
            },
            livedYears: {
                key: Form1003EntityIds.BORROWER_CURRENT_ADDRESS_LIVED_YEARS_1A,
                label: "Lived years",
            },
            livedMonths: {
                key: Form1003EntityIds.BORROWER_CURRENT_ADDRESS_LIVED_MONTHS_1A,
                label: "Lived months",
            },
            rentPrice: {
                key: Form1003EntityIds.BORROWER_CURRENT_ADDRESS_RENT_PRICE_1A,
                label: "Rent price",
            },
        },
    },
    formerAddress: {
        label: "Former Address (1a)",
        fields: {
            doesNotApply: {
                key: Form1003EntityIds.BORROWER_FORMER_ADDRESS_DOESNT_APPLY_1A,
                label: "Does not apply",
            },
            street: {
                key: Form1003EntityIds.BORROWER_FORMER_ADDRESS_STREET_1A,
                label: "Street",
            },
            unit: {
                key: Form1003EntityIds.BORROWER_FORMER_ADDRESS_UNIT_1A,
                label: "Unit",
            },
            city: { key: Form1003EntityIds.BORROWER_FORMER_ADDRESS_CITY_1A, label: "City" },
            state: {
                key: Form1003EntityIds.BORROWER_FORMER_ADDRESS_STATE_1A,
                label: "State",
            },
            zip: { key: Form1003EntityIds.BORROWER_FORMER_ADDRESS_ZIP_1A, label: "ZIP" },
            country: {
                key: Form1003EntityIds.BORROWER_FORMER_ADDRESS_COUNTRY_1A,
                label: "Country",
            },
            livedYears: {
                key: Form1003EntityIds.BORROWER_FORMER_ADDRESS_LIVED_YEARS_1A,
                label: "Lived years",
            },
            livedMonths: {
                key: Form1003EntityIds.BORROWER_FORMER_ADDRESS_LIVED_MONTHS_1A,
                label: "Lived months",
            },
            rentPrice: {
                key: Form1003EntityIds.BORROWER_FORMER_ADDRESS_RENT_PRICE_1A,
                label: "Rent price",
            },
        },
    },
    mailingAddress: {
        label: "Mailing Address (1a)",
        fields: {
            doesNotApply: {
                key: Form1003EntityIds.BORROWER_MAILING_ADDRESS_DOESNT_APPLY_1A,
                label: "Does not apply",
            },
            street: {
                key: Form1003EntityIds.BORROWER_MAILING_ADDRESS_STREET_1A,
                label: "Street",
            },
            unit: {
                key: Form1003EntityIds.BORROWER_MAILING_ADDRESS_UNIT_1A,
                label: "Unit",
            },
            city: { key: Form1003EntityIds.BORROWER_MAILING_ADDRESS_CITY_1A, label: "City" },
            state: {
                key: Form1003EntityIds.BORROWER_MAILING_ADDRESS_STATE_1A,
                label: "State",
            },
            zip: { key: Form1003EntityIds.BORROWER_MAILING_ADDRESS_ZIP_1A, label: "ZIP" },
            country: {
                key: Form1003EntityIds.BORROWER_MAILING_ADDRESS_COUNTRY_1A,
                label: "Country",
            },
        },
    },

    //Section 1b
    currentEmployment: {
        label: "Current Employment (1b)",
        fields: {
            doesNotApply: {
                key: Form1003EntityIds.CURRENT_EMPLOYMENT_DOES_NOT_APPLY_1B,
                label: "Doesn't apply",
            },
            employerName: {
                key: Form1003EntityIds.CURRENT_EMPLOYMENT_NAME_1B,
                label: "Employer name",
            },
            phone: {
                key: Form1003EntityIds.CURRENT_EMPLOYMENT_PHONE_1B,
                label: "Employer phone",
            },
            position: {
                key: Form1003EntityIds.CURRENT_EMPLOYMENT_POSITION_OR_TITLE_1B,
                label: "Position or title",
            },
            startDate: {
                key: Form1003EntityIds.CURRENT_EMPLOYMENT_START_DATE_1B,
                label: "Start date",
            },
            lineOfWorkYears: {
                key: Form1003EntityIds.CURRENT_EMPLOYMENT_LINE_OF_WORK_YEARS_1B,
                label: "In this line of work (years)",
            },
            lineOfWorkMonth: {
                key: Form1003EntityIds.CURRENT_EMPLOYMENT_LINE_OF_WORK_MONTHS_1B,
                label: "In this line of work (months)",
            },
            isBusinessOwner: {
                key: Form1003EntityIds.CURRENT_EMPLOYMENT_BUSINESS_OWNER_OR_SELF_EMPLOYED_1B,
                label: "Is business owner",
            },
            hasMajorityOwnership: {
                key: Form1003EntityIds.CURRENT_EMPLOYMENT_OWNERSHIP_SHARE_MORE_25_1B,
                label: "Has ownership of 25% or more",
            },
            hasMinorityOwnership: {
                key: Form1003EntityIds.CURRENT_EMPLOYMENT_OWNERSHIP_SHARE_LESS_25_1B,
                label: "Has ownership of less than 25%",
            },
            employedByFamilyMember: {
                key: Form1003EntityIds.CURRENT_EMPLOYMENT_EMPLOYED_BY_FAMILY_MEMBER_1B,
                label: "Employed by family member",
            },
            monthlyIncome: {
                key: Form1003EntityIds.CURRENT_EMPLOYMENT_MONTHLY_INCOME_OR_LOSS_1B,
                label: "Monthly income or loss",
            },
        },
    },
    currentEmploymentAddress: {
        label: "Current Employment Address (1b)",
        fields: {
            street: { key: Form1003EntityIds.CURRENT_EMPLOYMENT_STREET_1B, label: "Street" },
            unit: { key: Form1003EntityIds.CURRENT_EMPLOYMENT_UNIT_1B, label: "Unit" },
            city: { key: Form1003EntityIds.CURRENT_EMPLOYMENT_CITY_1B, label: "City" },
            state: { key: Form1003EntityIds.CURRENT_EMPLOYMENT_STATE_1B, label: "State" },
            zip: { key: Form1003EntityIds.CURRENT_EMPLOYMENT_ZIP_1B, label: "Zip" },
            country: {
                key: Form1003EntityIds.CURRENT_EMPLOYMENT_COUNTRY_1B,
                label: "Country",
            },
        },
    },
    currentEmploymentGrossMonthlyIncome: {
        label: "Gross Monthly Income (1b)",
        fields: {
            base: {
                key: Form1003EntityIds.CURRENT_EMPLOYMENT_GROSS_MONTHLY_INCOME_BASE_1B,
                label: "Base",
            },
            overtime: {
                key: Form1003EntityIds.CURRENT_EMPLOYMENT_GROSS_MONTHLY_INCOME_OVERTIME_1B,
                label: "Overtime",
            },
            bonus: {
                key: Form1003EntityIds.CURRENT_EMPLOYMENT_GROSS_MONTHLY_INCOME_BONUS_1B,
                label: "Bonus",
            },
            commission: {
                key: Form1003EntityIds.CURRENT_EMPLOYMENT_GROSS_MONTHLY_INCOME_COMMISSION_1B,
                label: "Commission",
            },
            military: {
                key: Form1003EntityIds.CURRENT_EMPLOYMENT_GROSS_MONTHLY_INCOME_MILITARY_1B,
                label: "Military entitlements",
            },
            other: {
                key: Form1003EntityIds.CURRENT_EMPLOYMENT_GROSS_MONTHLY_INCOME_OTHER_1B,
                label: "Other",
            },
            total: {
                key: Form1003EntityIds.CURRENT_EMPLOYMENT_GROSS_MONTHLY_INCOME_TOTAL_1B,
                label: "Total",
            },
        },
    },

    //Section 1c
    additionalEmployment: {
        label: "Additional Employment (1c)",
        fields: {
            doesNotApply: {
                key: Form1003EntityIds.ADDITIONAL_EMPLOYMENT_DOES_NOT_APPLY_1C,
                label: "Doesn't apply",
            },
            employerName: {
                key: Form1003EntityIds.ADDITIONAL_EMPLOYMENT_BUSINESS_NAME_1C,
                label: "Employer name",
            },
            phone: {
                key: Form1003EntityIds.ADDITIONAL_EMPLOYMENT_BUSINESS_PHONE_1C,
                label: "Employer phone",
            },
            position: {
                key: Form1003EntityIds.ADDITIONAL_EMPLOYMENT_POSITION_OR_TITLE_1C,
                label: "Position or title",
            },
            startDate: {
                key: Form1003EntityIds.ADDITIONAL_EMPLOYMENT_START_DATE_1C,
                label: "Start date",
            },
            lineOfWorkYears: {
                key: Form1003EntityIds.ADDITIONAL_EMPLOYMENT_LINE_OF_WORK_YEARS_1C,
                label: "In this line of work (years)",
            },
            lineOfWorkMonth: {
                key: Form1003EntityIds.ADDITIONAL_EMPLOYMENT_LINE_OF_WORK_MONTHS_1C,
                label: "In this line of work (months)",
            },
            isBusinessOwner: {
                key: Form1003EntityIds.ADDITIONAL_EMPLOYMENT_BUSINESS_OWNER_OR_SELF_EMPLOYED_1C,
                label: "Is business owner",
            },
            hasMajorityOwnership: {
                key: Form1003EntityIds.ADDITIONAL_EMPLOYMENT_HAVE_MORE_THAN_25_OWNERSHIP_1C,
                label: "Has ownership of 25% or more",
            },
            hasMinorityOwnership: {
                key: Form1003EntityIds.ADDITIONAL_EMPLOYMENT_HAVE_LESS_THAN_25_OWNERSHIP_1C,
                label: "Has ownership of less than 25%",
            },
            employedByFamilyMember: {
                key: Form1003EntityIds.ADDITIONAL_EMPLOYMENT_EMPLOYED_BY_FAMILY_MEMBER_1C,
                label: "Employed by family member",
            },
            monthlyIncome: {
                key: Form1003EntityIds.ADDITIONAL_EMPLOYMENT_MONTHLY_INCOME_1C,
                label: "Monthly income or loss",
            },
        },
    },
    additionalEmploymentAddress: {
        label: "Additional Employment Address (1c)",
        fields: {
            street: {
                key: Form1003EntityIds.ADDITIONAL_EMPLOYMENT_BUSINESS_STREET_1C,
                label: "Street",
            },
            unit: {
                key: Form1003EntityIds.ADDITIONAL_EMPLOYMENT_BUSINESS_UNIT_1C,
                label: "Unit",
            },
            city: {
                key: Form1003EntityIds.ADDITIONAL_EMPLOYMENT_BUSINESS_CITY_1C,
                label: "City",
            },
            state: {
                key: Form1003EntityIds.ADDITIONAL_EMPLOYMENT_BUSINESS_STATE_1C,
                label: "State",
            },
            zip: {
                key: Form1003EntityIds.ADDITIONAL_EMPLOYMENT_BUSINESS_ZIP_1C,
                label: "Zip",
            },
            country: {
                key: Form1003EntityIds.ADDITIONAL_EMPLOYMENT_BUSINESS_COUNTRY_1C,
                label: "Country",
            },
        },
    },
    additionalEmploymentGrossMonthlyIncome: {
        label: "Additional Employment Gross Monthly Income (1c)",
        fields: {
            base: {
                key: Form1003EntityIds.ADDITIONAL_EMPLOYMENT_GROSS_MONTHLY_INCOME_BASE_1C,
                label: "Base",
            },
            overtime: {
                key: Form1003EntityIds.ADDITIONAL_EMPLOYMENT_GROSS_MONTHLY_INCOME_OVERTIME_1C,
                label: "Overtime",
            },
            bonus: {
                key: Form1003EntityIds.ADDITIONAL_EMPLOYMENT_GROSS_MONTHLY_INCOME_BONUS_1C,
                label: "Bonus",
            },
            commission: {
                key: Form1003EntityIds.ADDITIONAL_EMPLOYMENT_GROSS_MONTHLY_INCOME_COMMISION_1C,
                label: "Commission",
            },
            military: {
                key: Form1003EntityIds.ADDITIONAL_EMPLOYMENT_GROSS_MONTHLY_INCOME_MILITARY_1C,
                label: "Military entitlements",
            },
            other: {
                key: Form1003EntityIds.ADDITIONAL_EMPLOYMENT_GROSS_MONTHLY_INCOME_OTHER_1C,
                label: "Other",
            },
            total: {
                key: Form1003EntityIds.ADDITIONAL_EMPLOYMENT_GROSS_MONTHLY_INCOME_TOTAL_1C,
                label: "Total",
            },
        },
    },

    //Section 1d
    previousEmployment: {
        label: "Previous Employment (1d)",
        fields: {
            doesNotApply: {
                key: Form1003EntityIds.PREVIOUS_EMPLOYMENT_DOES_NOT_APPLY_1D,
                label: "Doesn't apply",
            },
            employerName: {
                key: Form1003EntityIds.PREVIOUS_EMPLOYMENT_BUSINESS_NAME_1D,
                label: "Employer name",
            },
            position: {
                key: Form1003EntityIds.PREVIOUS_EMPLOYMENT_POSITION_OR_TITLE_1D,
                label: "Position or title",
            },
            startDate: {
                key: Form1003EntityIds.PREVIOUS_EMPLOYMENT_START_DATE_1D,
                label: "Start date",
            },
            endDate: {
                key: Form1003EntityIds.PREVIOUS_EMPLOYMENT_END_DATE_1D,
                label: "End date",
            },
            isBusinessOwner: {
                key: Form1003EntityIds.PREVIOUS_EMPLOYMENT_BUSINESS_OWNER_OR_SELF_EMPLOYED_1D,
                label: "Is business owner",
            },
            grossMonthlyIncome: {
                key: Form1003EntityIds.PREVIOUS_EMPLOYMENT_GROSS_MONTHLY_INCOME_1D,
                label: "Gross monthly income",
            },
        },
    },
    previousEmploymentAddress: {
        label: "Previous Employment Address (1d)",
        fields: {
            street: {
                key: Form1003EntityIds.PREVIOUS_EMPLOYMENT_BUSINESS_STREET_1D,
                label: "Street",
            },
            unit: {
                key: Form1003EntityIds.PREVIOUS_EMPLOYMENT_BUSINESS_UNIT_1D,
                label: "Unit",
            },
            city: {
                key: Form1003EntityIds.PREVIOUS_EMPLOYMENT_BUSINESS_CITY_1D,
                label: "City",
            },
            state: {
                key: Form1003EntityIds.PREVIOUS_EMPLOYMENT_BUSINESS_STATE_1D,
                label: "State",
            },
            zip: {
                key: Form1003EntityIds.PREVIOUS_EMPLOYMENT_BUSINESS_ZIP_1D,
                label: "Zip",
            },
            country: {
                key: Form1003EntityIds.PREVIOUS_EMPLOYMENT_BUSINESS_COUNTRY_1D,
                label: "Country",
            },
        },
    },

    //Section 1e
    otherIncome: {
        label: "Other Income (1e)",
        fields: {
            doesNotApply: {
                key: Form1003EntityIds.INCOME_FROM_OTHER_SOURCES_DOES_NOT_APPLY_1E,
                label: "Does not apply",
            },
            sources: {
                label: "Income sources",
                key: Form1003EntityIds.INCOME_FROM_OTHER_SOURCES_1E,
                isArray: true,
                fields: {
                    name: {
                        label: "Source name",
                        key: Form1003EntityIds["INCOME_FROM_OTHER_SOURCES_1E:INCOME_SOURCE_NAME"],
                    },
                    monthlyIncome: {
                        label: "Monthly income",
                        key: Form1003EntityIds["INCOME_FROM_OTHER_SOURCES_1E:MONTHLY_INCOME"]
                    }
                },
            },
            totalMonthlyIncome: {
                key: Form1003EntityIds.INCOME_FROM_OTHER_SOURCES_TOTAL_AMOUNT_1E,
                label: "Total monthly income",
            },
        },
    },

    //Section 2a
    primaryAssets: {
        label: "Assets (2a)",
        fields: {
            assets: {
                key: Form1003EntityIds.ASSET_ACCOUNT_2A,
                label: "Assets",
                isArray: true,
                fields: {
                    accountType: { key: Form1003EntityIds['ASSET_ACCOUNT_2A:ACCOUNT_TYPE'], label: "Account type" },
                    financialInstitution: { key: Form1003EntityIds['ASSET_ACCOUNT_2A:FINANCIAL_INSTITUTION'], label: "Financial institution" },
                    accountNumber: { key: Form1003EntityIds['ASSET_ACCOUNT_2A:ACCOUNT_NUMBER'], label: 'Account number' },
                    cashOrMarketValue: { key: Form1003EntityIds['ASSET_ACCOUNT_2A:CASH_OR_MARKET_VALUE'], label: "Cash or Market Value" }
                }
            },
            totalAmount: {
                key: Form1003EntityIds.ASSET_ACCOUNTS_TOTAL_VALUE_2A,
                label: "Total amount"
            }
        }
    },

    //Section 2b
    otherAssets: {
        label: "Other Assets (2b)",
        fields: {
            doesNotApply: {
                key: Form1003EntityIds.OTHER_ASSETS_AND_CREDIT_DOES_NOT_APPLY_2B,
                label: "Does not apply",
            },
            assets: {
                key: Form1003EntityIds.OTHER_ASSET_OR_CREDIT_2B,
                label: "Assets",
                isArray: true,
                fields: {
                    assetType: { key: Form1003EntityIds['OTHER_ASSET_OR_CREDIT_2B:ASSET_OR_CREDIT_TYPE'], label: "Asset type" },
                    cashOrMarketValue: { key: Form1003EntityIds['OTHER_ASSET_OR_CREDIT_2B:CASH_OR_MARKET_VALUE'], label: "Cash or Market Value" }
                }
            },
            totalAmount: {
                key: Form1003EntityIds.OTHER_ASSETS_AND_CREDITS_TOTAL_AMOUNT_2B,
                label: "Total amount"
            }
        }
    },

    //Section 2c
    primaryLiabilities: {
        label: "Liabilities (2c)",
        fields: {
            doesNotApply: {
                key: Form1003EntityIds.LIABILITIES_DOES_NOT_APPLY_2C,
                label: "Does not apply",
            },
            assets: {
                key: Form1003EntityIds.LIABILITY_2C,
                label: "Liabilities",
                isArray: true,
                fields: {
                    accountType: { key: Form1003EntityIds['LIABILITY_2C:ACCOUNT_TYPE'], label: "Account type" },
                    companyName: { key: Form1003EntityIds['LIABILITY_2C:COMPANY_NAME'], label: "Company name" },
                    accountNumber: { key: Form1003EntityIds['LIABILITY_2C:ACCOUNT_NUMBER'], label: "Account number" },
                    unpaidBalance: { key: Form1003EntityIds['LIABILITY_2C:UNPAID_BALANCE'], label: "Unpaid balance" },
                    toBePaidOffBeforeClosing: { key: Form1003EntityIds['LIABILITY_2C:TO_BE_PAID_OFF_AT_OR_BEFORE_CLOSING'], label: "To be paid before closing" },
                    monthlyPayment: { key: Form1003EntityIds['LIABILITY_2C:MONTHLY_PAYMENT'], label: "Monthly payment" },
                }
            }
        }
    },

    //Section 2d
    otherLiabilities: {
        label: "Other Liabilities (2d)",
        fields: {
            doesNotApply: {
                key: Form1003EntityIds.OTHER_LIABILITIES_AND_EXPENSES_DOES_NOT_APPLY_2D,
                label: "Does not apply",
            },
            assets: {
                key: Form1003EntityIds.OTHER_LIABILITY_AND_EXPENSES_2D,
                label: "Liabilities",
                isArray: true,
                fields: {
                    liabilityType: { key: Form1003EntityIds['OTHER_LIABILITY_AND_EXPENSES_2D:LIABILITY_NAME'], label: "Liability type" },
                    monthlyPayment: { key: Form1003EntityIds['OTHER_LIABILITY_AND_EXPENSES_2D:MONTHLY_PAYMENT'], label: "Monthly payment" },
                }
            }
        }
    }
};

export const UrlaForm1003: DocumentType<Form1003EntityIds> = {
    slug: 'urla-form-1003',

    //It might take multiple processors to extract data from entire document
    //For example google doc ai has limitation for 150 entities per processor
    //So to process entire URLA Form 1003 it might take 3 - 4 processors
    //Other than that you can layer multiple processors to extract additional entities like signatures, radio buttons, etc
    processors: [
        {
            pageRange: {
                from: 1,
                to: 3
            },
            name: 'projects/614556138526/locations/us/processors/a596e4ceda5829e'
        }
    ],

    //List of the ids of the entities extracted by all the processors
    entities: Form1003EntityIds,


    //Mapping of the entities into the usable format
    model: documentModel,
};


