'use client';
import { Tab, Tabs } from "react-bootstrap";
import { Media } from "@/app/models/media";
import ImageCarousel from "@/app/components/ui/carousel";

interface AppTabs {
    descriptionTab: string,
    images: Media[],
    caption?: string
}

export default function AppTabs({descriptionTab, images, caption}: AppTabs) {
    return (
        <Tabs className="mb-3">
            <Tab eventKey="description" title="Description">
                {descriptionTab}
            </Tab>
            <Tab eventKey="images" title="Images">
                <ImageCarousel images={images}
                               caption={caption}/>
            </Tab>
        </Tabs>
    );
}
