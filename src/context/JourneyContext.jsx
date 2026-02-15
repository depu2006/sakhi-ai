import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

const JourneyContext = createContext();

export const useJourney = () => useContext(JourneyContext);

export const JourneyProvider = ({ children }) => {
    const [isJourneyActive, setIsJourneyActive] = useState(false);
    const [destination, setDestination] = useState("");

    // Timer & Alert Logic
    const [timerRemaining, setTimerRemaining] = useState(0); // Seconds until estimated arrival
    const [escalationLevel, setEscalationLevel] = useState(0);
    // 0: Normal Journey
    // 1: Arrival Time Reached - Waiting for User Confirmation
    // 2: Family Alert Triggered
    // 3: Emergency/Parents Alert Triggered

    const timerRef = useRef(null);
    const escalationRef = useRef(null);

    const startJourney = (dest, estimatedMinutes) => {
        setIsJourneyActive(true);
        setDestination(dest);
        setTimerRemaining(estimatedMinutes * 60);
        setEscalationLevel(0);

        if (timerRef.current) clearInterval(timerRef.current);
        if (escalationRef.current) clearInterval(escalationRef.current);

        timerRef.current = setInterval(() => {
            setTimerRemaining(prev => {
                if (prev <= 1) {
                    handleTimeExpiration();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const handleTimeExpiration = () => {
        if (timerRef.current) clearInterval(timerRef.current);

        // Level 1: Ask User for Confirmation
        setEscalationLevel(1);

        // Start Escalation Timer
        let secondsPassed = 0;
        if (escalationRef.current) clearInterval(escalationRef.current);

        escalationRef.current = setInterval(() => {
            secondsPassed++;

            // After 30s -> Level 2: Alert Family
            if (secondsPassed === 30 && escalationLevel < 2) {
                setEscalationLevel(2);
                console.log("ALERT: Notifying Family Members");
            }

            // After 60s total -> Level 3: Alert Emergency/Parents
            if (secondsPassed === 60 && escalationLevel < 3) {
                setEscalationLevel(3);
                console.log("CRITICAL: Notifying Parents & Emergency Services");
                if (escalationRef.current) clearInterval(escalationRef.current);
            }
        }, 1000); // Check every second
    };

    const confirmSafe = () => {
        endJourney();
    };

    const extendJourney = (minutes) => {
        setTimerRemaining(minutes * 60);
        setEscalationLevel(0);
        if (timerRef.current) clearInterval(timerRef.current);
        if (escalationRef.current) clearInterval(escalationRef.current);

        timerRef.current = setInterval(() => {
            setTimerRemaining(prev => {
                if (prev <= 1) {
                    handleTimeExpiration();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const endJourney = () => {
        setIsJourneyActive(false);
        setDestination("");
        setTimerRemaining(0);
        setEscalationLevel(0);
        if (timerRef.current) clearInterval(timerRef.current);
        if (escalationRef.current) clearInterval(escalationRef.current);
    };

    useEffect(() => {
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
            if (escalationRef.current) clearInterval(escalationRef.current);
        };
    }, []);

    return (
        <JourneyContext.Provider value={{
            isJourneyActive,
            destination,
            timerRemaining,
            escalationLevel,
            startJourney,
            confirmSafe,
            extendJourney,
            endJourney
        }}>
            {children}
        </JourneyContext.Provider>
    );
};
