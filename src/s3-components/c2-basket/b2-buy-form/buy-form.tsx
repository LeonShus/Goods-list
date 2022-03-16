import React from "react"
import styles from "./buy-form.module.scss"
import {useFormik} from "formik"
import * as Yup from "yup"
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const BuyForm = () => {
    
    const formik = useFormik({
        initialValues: {
            fullName: "",
            address: "",
            phone: "+7",
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .max(40, "Must be 40 characters or less")
                .required("Required"),
            address: Yup.string()
                .max(40, "Must be 40 characters or less")
                .required("Required"),
            phone: Yup.string()
                .required("Required"),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },

    })

    return (
        <div className={styles.container}>
            <form
                className={styles.formContainer}
                onSubmit={formik.handleSubmit}
            >
                <div className={styles.inputContainer}>
                    <TextField
                        id="outlined-error"
                        label="Full Name"
                        error={formik.touched.fullName && formik.errors.fullName ? true : false}
                        {...formik.getFieldProps("fullName")}
                    />
                    {formik.touched.fullName && formik.errors.fullName ? (
                        <div className={styles.error}>{formik.errors.fullName}</div>
                    ) : null}
                </div>
                <div className={styles.inputContainer}>
                    <TextField
                        id="outlined-error"
                        label="Address"
                        error={formik.touched.address && formik.errors.address ? true : false}
                        {...formik.getFieldProps("address")}
                    />
                    {formik.touched.address && formik.errors.address ? (
                        <div className={styles.error}>{formik.errors.address}</div>
                    ) : null}
                </div>
                <div className={styles.inputContainer}>
                    <TextField
                        id="outlined-error"
                        label="Phone"
                        error={formik.touched.phone && formik.errors.phone ? true : false}
                        {...formik.getFieldProps("phone")}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                        <div className={styles.error}>{formik.errors.phone}</div>
                    ) : null}
                </div>
                <Button
                    type="submit"
                    size={"large"}
                    variant={"contained"}
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}