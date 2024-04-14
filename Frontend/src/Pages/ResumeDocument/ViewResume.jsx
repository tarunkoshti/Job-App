import React, { useEffect } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getStudentResume } from '../../store/Actions/resumeActions';
import Education from './Education';
import Skills from './Skills';
import WorkExperience from './WorkExperience';
import Project from './Project';
import Certificate from './Certificate';
import Accomplishment from './Accomplishment';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
    },
    section: {
        margin: 10,
        paddingTop: 30,
        flexGrow: 1,
    },
});

// Create Document Component
const ViewResume = () => {

    const dispatch = useDispatch()
    const { id } = useParams()

    const resume = useSelector((state) => state.resumeReducer.resumeData?.updatedResume)

    useEffect(() => {
        dispatch(getStudentResume(id))
    }, [id])

    return (
        < Document >
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    {/* <Header resume={resume} /> */}
                    <Education resume={resume} />
                    <Skills resume={resume} />
                    <WorkExperience resume={resume} />
                    <Project resume={resume} />
                    <Certificate resume={resume} />
                    <Accomplishment resume={resume} />
                </View>
            </Page>
        </Document >
    )
};

export default ViewResume;