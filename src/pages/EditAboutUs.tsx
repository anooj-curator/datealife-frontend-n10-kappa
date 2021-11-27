import { Container, Stack, TextField, Typography } from "@mui/material";
import { Button } from "../components/button";
import Layout from "../components/layout/Layout";
import Boxed from "../components/boxed/Boxed";

const Interests = (): JSX.Element => {
    return (
        <Layout
            hasDrawer
            headerProps={{
                text: "Edit about",
                backFunction: () => {}
            }}
        >
             <Boxed type="full">
                <Container maxWidth="sm" style={{marginTop: "10", marginBottom: "10"}}>
                    <Stack spacing={5}>
                        <TextField
                            id=""
                            label="Bio"
                            multiline
                            rows={4}
                            defaultValue="lorem ipsum dollar"
                            variant="outlined"
                            color="primary"
                        />

                        <TextField
                            id=""
                            label="Job Title"
                            defaultValue="lorem ipsum dollar"
                            variant="standard"
                            color="primary"

                        />

                        <TextField
                            id=""
                            label="Company name"
                            defaultValue="lorem ipsum dollar"
                            variant="standard"
                            color="primary"

                        />

                        <Button color="primary" variant="contained">
                            Save
                        </Button>
                    </Stack>
                </Container>
            </Boxed>
        </Layout>
    );
};

export default Interests;
