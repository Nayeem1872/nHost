"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // console.log("user",email);
  // console.log("pass",password);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const data = {
        username: email,
        password: password,
      };

      console.log("data", data);

      const response = await axios.post("/api/login", data);
      // Handle successful login, e.g., redirect to dashboard
      if (response.data.success === true) {
        // If login is successful, redirect to dashboard
        router.push("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("Invalid email or password");
    }
  };
  const handleLoginWithNIam = () => {
    router.push("http://192.168.0.110:3000/sso?next=http://192.168.0.109:3001");
    // router.push("/niamsso?token=54545448685464564"); 
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Username</Label>
                <Input
                  id="email"
                  placeholder="Username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {/* {error && <p className="text-red-500">{error}</p>} */}
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>

            
          </form>
          <Button
              className="w-full bg-slate-300 mt-4 text-black hover:bg-slate-100"
              onClick={handleLoginWithNIam}
            >
              Login with nIam
            </Button>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          src="/image/people2.jpg"
          alt="Image"
          width="1200"
          height="600"
          className="h-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
