import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";

function FaqAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Adoption Process</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            To adopt a pet, simply fill out our online application form. Once
            approved, we’ll schedule a meeting to ensure the right fit between
            you and your new companion.
          </p>
          <p>
            All adopted animals are vaccinated, microchipped, and
            spayed/neutered before going to their new home.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Visiting Hours</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Our shelter is open to visitors from Monday to Saturday, 10 AM to 6
            PM. Walk-ins are welcome, but we recommend scheduling an appointment
            for adoptions.
          </p>
          <p>Guided tours and group visits can also be arranged in advance.</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Donations & Volunteering</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We rely heavily on community support. Donations of food, supplies,
            or funds help us care for our animals and improve their quality of
            life.
          </p>
          <p>
            Volunteers are always welcome! Whether it’s walking dogs, cleaning,
            or helping at events, your time makes a big difference.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>What Should I Bring When Adopting?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Please bring a valid photo ID and, if renting, proof that pets are
            allowed in your residence. A carrier or leash is also required for
            safe transport.
          </p>
          <p>
            Adoption fees can be paid by card or cash at the time of pickup.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger>Can I Surrender My Pet?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Yes, we accept surrendered pets by appointment. This allows us to
            evaluate space and prepare accordingly.
          </p>
          <p>
            Please provide any medical records, vaccination history, and
            personal info about your pet to help us rehome them responsibly.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6">
        <AccordionTrigger>Lost & Found Animals</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            If you’ve lost a pet, check our lost & found listings and contact
            the shelter with a description and photo. Found animals are held for
            a limited time before becoming adoptable.
          </p>
          <p>
            We also encourage microchipping to increase the chances of reuniting
            pets with their owners.
          </p>
        </AccordionContent>
      </AccordionItem>
      <Button variant={"check"} className="mt-8">
        Show All Questions
      </Button>
    </Accordion>
  );
}

export default FaqAccordion;
