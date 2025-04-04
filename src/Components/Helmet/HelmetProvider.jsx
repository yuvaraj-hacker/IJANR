import { Helmet } from "react-helmet";

const HelmetComponent = ({ title }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="keywords" content="International Journal of Advanced Nursing Research, IJANR, Nursing research journals, Advanced nursing studies, Peer-reviewed nursing journal, Healthcare research journal, Open access nursing publications" />
            <meta name="description" content="The International Journal of Advanced Nursing Research (IJANR) publishes peer-reviewed, high-quality research in nursing, healthcare practices, and advanced clinical studies." />
            <meta name="author" content="IJANR Editorial Team" />
            <meta name="robots" content="index, follow" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="International Journal of Advanced Nursing Research (IJANR)" />
            <meta property="og:description" content="The International Journal of Advanced Nursing Research (IJANR) publishes peer-reviewed, high-quality research in nursing, healthcare practices, and advanced clinical studies." />
            <meta property="og:url" content="https://ijanr.com/" />
              <meta property="og:image" content="https://ijanr.com/assets/Images/IJANR.png" />
            <link rel="canonical" href="https://ijanr.com/" />
            <link rel="icon" type="image/png" href="https://ijanr.com/assets/Images/Favicon.png" />
        </Helmet>
    );
};

export default HelmetComponent;
