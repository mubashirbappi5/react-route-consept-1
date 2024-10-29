import Plan from "./Plan";


const Pricing = () => {
    const gymMembershipPricing = [
        {
          id: 1,
          plans: "Basic",
          price: 20, 
          duration: "1 month",
          features: [
            "Access to gym equipment",
            "Locker facility",
            "Free Wi-Fi",
          ],
        },
        {
          id: 2,
          plans: "Standard",
          price: 50, 
          duration: "3 months",
          features: [
            "Access to gym equipment",
            "Locker facility",
            "Free Wi-Fi",
            "One personal training session per month",
          ],
        },
        {
          id: 3,
          plans: "Premium",
          price: 90, 
          duration: "6 months",
          features: [
            "Access to gym equipment",
            "Locker facility",
            "Free Wi-Fi",
            "Unlimited personal training sessions",
            "Access to group classes",
            "Sauna and steam room",
          ],
        },
        {
          id: 4,
          plans: "Annual",
          price: 150, 
          duration: "1 year",
          features: [
            "Access to gym equipment",
            "Locker facility",
            "Free Wi-Fi",
            "Unlimited personal training sessions",
            "Access to group classes",
            "Sauna and steam room",
            "Priority support",
          ],
        },
      ];
      
    return (
        <div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 ">
                {
                    gymMembershipPricing.map(plan => <Plan key={plan.id} plan={plan}/>)
                }

            </div>
            
        </div>
    );
};

export default Pricing;