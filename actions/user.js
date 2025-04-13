"use server";
import { db } from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server";
import { generateAIInsights } from "./dashboard";

export async function updateUser(data) {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
        where: {
            clerkUserId: userId,
        },
    });
    if (!user) throw new Error("User not found");

    try {

        const result = await db.$transaction(
            async (tx) => {

                //find if the industry exists
                let industryInsight = await tx.industryInsight.findUnique({
                    where: {
                        industry: data.industry,
                    },
                });

                // if the industry doesnt exists, create it with default values - will replace with ai later
                if (!industryInsight) {
                    const insights = await generateAIInsights(data.industry);
                  
                    // Helper to safely uppercase enums
                    function toEnum(value, valid) {
                      const v = value?.toUpperCase?.();
                      return valid.includes(v) ? v : valid[0]; // fallback to first enum
                    }
                  
                    const formattedInsights = {
                      ...insights,
                      demandLevel: toEnum(insights.demandLevel, ["HIGH", "MEDIUM", "LOW"]),
                      marketOutlook: toEnum(insights.marketOutlook, ["POSITIVE", "NEGATIVE", "NEUTRAL"]),
                    };
                  
                    industryInsight = await db.industryInsight.create({
                      data: {
                        industry: data.industry,
                        ...formattedInsights,
                        nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
                      }
                    });
                  }
                  

                //update the user
                const updatedUser = await tx.user.update({
                    where: {
                        id: user.id,
                    },
                    data: {
                        industry: data.industry,
                        experience: data.experience,
                        bio: data.bio,
                        skills: data.skills,
                    },
                });
                return { updatedUser, industryInsight };
            },
            {
                timeout: 10000, // 10 seconds
            }
        );

        return { success: true, ...result };
    } catch (error) {
        console.error("Error updating user and industry:", error.message);
        throw new Error("Failed to update profile" + error.message);

    }

}
export async function getUserOnboardingStatus() {


    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
        where: {
            clerkUserId: userId,
        },
    });
    if (!user) throw new Error("User not found");

    try {
        const user = await db.user.findUnique({
            where: {
                clerkUserId: userId,
            },
            select: {
                industry: true,
            },
        });

        return {
            isOnboard: !!user?.industry,
        };
    } catch (error) {
        console.error("Error checking onboarding status:", error.message);
        throw new Error("Failed to check onboarding status");
    }
}