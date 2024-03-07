import { useLoaderData } from "react-router-dom";
import SectionTitle from "../Title/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BookCard from "./BookCard";
import { useState } from "react";


const BestProducts = () => {

    const AllBooksLoad = useLoaderData()
    console.log(AllBooksLoad);

    const Fiction = AllBooksLoad.filter(item => item.category.toLowerCase() == 'fiction')
    const Satire = AllBooksLoad.filter(item => item.category.toLowerCase() == 'satire')
    const Art = AllBooksLoad.filter(item => item.category.toLowerCase() == 'art')
    const Journals = AllBooksLoad.filter(item => item.category.toLowerCase() == 'journals')
    const History = AllBooksLoad.filter(item => item.category.toLowerCase() == 'history')
    const Anthologies = AllBooksLoad.filter(item => item.category.toLowerCase() == 'anthologies')

    console.log(Satire);

    const [tabIndex, setTabIndex] = useState(0)

    return (
        <div className="lg:mx-56 py-20">
            <SectionTitle
                heading='Best Products'
            />

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="border-none ">
                    <Tab>Fiction</Tab>
                    <Tab>Satire</Tab>
                    <Tab>Art</Tab>
                    <Tab>Journals</Tab>
                    <Tab>History</Tab>
                    <Tab>Anthologies</Tab>

                </TabList>
                <TabPanel>
                    <div className="grid grid-cols-4 gap-10 pt-10">
                        {
                            Fiction.map((item, idx) =>
                                <BookCard
                                    key={idx}
                                    item={item} />)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-4 gap-10 pt-10">
                        {
                            Satire.map((item, idx) =>
                                <BookCard
                                    key={idx}
                                    item={item} />)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-4 gap-10 pt-10">
                        {
                            Art.map((item, idx) =>
                                <BookCard
                                    key={idx}
                                    item={item} />)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-4 gap-10 pt-10">
                        {
                            Journals.map((item, idx) =>
                                <BookCard
                                    key={idx}
                                    item={item} />)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-4 gap-10 pt-10">
                        {
                            History.map((item, idx) =>
                                <BookCard
                                    key={idx}
                                    item={item} />)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-4 gap-10 pt-10">
                        {
                            Anthologies.map((item, idx) =>
                                <BookCard
                                    key={idx}
                                    item={item} />)
                        }
                    </div>

                </TabPanel>
            </Tabs>

        </div>
    );
};

export default BestProducts;