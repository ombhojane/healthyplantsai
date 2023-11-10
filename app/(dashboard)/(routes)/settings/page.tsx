import { Info, Settings } from "lucide-react";

import { Heading } from "@/components/heading";
import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";
import { info } from "console";

const SettingsPage = async () => {
  const isPro = await checkSubscription();

  return ( 
    <div>
      <Heading
        title="About Healthy Plants"
        description="Plant disease detection, preventions, remedies."
        icon={Info}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
<div className="px-4 md:px-20 lg:px-32 space-y-4">
  <p>Information comming soon.</p>
    </div>
    </div>
   );
}
 
export default SettingsPage;

