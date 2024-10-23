import { ContactContainer, NameContainer, Text, FullWidthInput, ContainerEmailEText, ButtonSubmit } from "./styles";

const ContactSection = () => {
    return (
        <ContactContainer >
            <Text id="footer">
                Join our email list hear the latest news, promotions, and beauty tips. 
            </Text>
            <NameContainer>
                <div>
                    <label>First name</label>
                    <input type="text" name="first-name" />
                </div>
                <div>
                    <label>Last name</label>
                    <input type="text" name="last-name" />
                </div>
            </NameContainer>
            <ContainerEmailEText>
                <div>
                    <label>E-mail</label>
                    <FullWidthInput type="email" name="email" />
                </div>
            <ButtonSubmit type="button">Submit</ButtonSubmit>
            </ContainerEmailEText>
        </ContactContainer>
    );
};

export default ContactSection;
