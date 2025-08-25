import OnBoardLayout from '../layouts/onboardLayout';
import { Welcome } from '../composite/welcome';

export default function LandingPage() {
    return (
        <OnBoardLayout>
            <Welcome />
        </OnBoardLayout>
    );
}
